import React, { useState } from 'react';
import './component.css';
import useAxiosEpisodes from '../hooks/useAxiosEpisodes.js';
import { Link } from 'react-router-dom';
import Pagination from './pagination';
import HeroCard from './card.js';

const ListOfEpisodes = (props) => {
  return (
    <div className="herolist">
      {props.data.map((hero, index) => (
        <HeroCard key={`hero-card-${index}`}>{hero.name}</HeroCard>
      ))}
    </div>
  );
};

export default function WrapperForEpisodes() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useAxiosEpisodes(page);
  console.log('WrapperForEpisodesData', data);
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
            <h5>List of episods</h5>
            <Pagination data={data.info} page={page} setPage={(page) => setPage(page)} />
            <ListOfEpisodes data={data.results} />
          </div>
        </>
      )}
    </>
  );
}
