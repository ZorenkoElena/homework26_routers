import React from 'react';
import './component.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="wrapper">
      <h4>Welcome to the The Rick and Morty page!</h4>
      <ul>
        <li>
          <Link to="/heroes" className="homepageLink">
            List of charakters
          </Link>
        </li>
        <li>
          <Link to="/episodes" className="homepageLink">
            List of episodes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
