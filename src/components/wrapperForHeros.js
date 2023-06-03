import React, { useState } from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import './component.css';
import useAxiosHeroes from '../hooks/useAxiosHeroes.js';
import Pagination from './pagination';
import HeroCard from './card.js';

const ListOfContents = (props) => {
  const navigate = useNavigate();
  const showCardInfo = (id) => navigate(`/heroes/hero/${id}`);

  return (
    <div className="herolist">
      {props.data.map((hero, index) => {
        return (
          <HeroCard key={`hero-card-${index}`} onClick={() => showCardInfo(hero.id)}>
            {hero.name}
          </HeroCard>
        );
      })}

      {/* {{ show } && <Hero id={number} />} */}
    </div>
  );
};

export default function WrapperForHeros() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useAxiosHeroes(page);
  console.log('WrapperForHeros', data);

  if (error) {
    return <h1 style={{ color: 'red' }}>We have a problem</h1>;
  }

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="wrapper">
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div className="wrapper">
            <Outlet />
            <h5>List of characters</h5>
            <Pagination data={data.info} page={page} setPage={(page) => setPage(page)} />
            <ListOfContents data={data.results} />
          </div>
        </>
      )}
    </>
  );
}
