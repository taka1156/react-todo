import React from 'react';
import { Link } from 'react-router-dom';
import { routesNav } from '../../constants';
import './Navigation.css';

function View(): JSX.Element {
  return (
    <div>
      <nav>
        <ul className="nav">
          {routesNav.map((route, i) => (
            <li key={`nav_${i}`} className="nav__item">
              <Link className="nav__item--link" to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default View;
