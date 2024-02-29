import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Destination">Destination</Link>
        </li>
        <li>
          <Link to="/Crew">Crew</Link>
        </li>
        <li>
          <Link to="/Technology">Technology</Link>
        </li>
      </ul>
    </nav>
 );
};

export default Navbar;
