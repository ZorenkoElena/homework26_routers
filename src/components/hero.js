import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAxiosHero from '../hooks/useAxiosHero.js';
import './component.css';

export default function Hero() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { error, data } = useAxiosHero(id);

  console.log('props.id', id);
  console.log('hero_data', data);
  if (error) {
    console.log('error from hero', error);
    return <h1 style={{ color: 'red' }}>We have a problem</h1>;
  }

  return (
    <div className="container hero">
      <div className="row">
        <div className="col-9">
          <h5>{data.name}</h5>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-outline-dark m-2"
            onClick={() => {
              navigate(`/heroes`);
            }}
          >
            Close
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={`${data.image}`} alt="Img" className="heroImage"></img>
        </div>
        <div className="col-6 heroDescription">
          <div>Status: {data.status}</div>
          <div>Species: {data.species}</div>
          <div>Gender: {data.gender}</div>
        </div>
      </div>
    </div>
  );
}
