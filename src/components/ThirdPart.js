import React from "react";
import { NavLink } from 'react-router-dom';

import Dropdown from './Dropdown';

import "./ThirdPart.css";

const ThirdPart = (props) => {

  const countryNames = props.countryNames;

  return (
    
    <React.Fragment>
      <nav className="nav-links">
        <div id="dropdown">
          <Dropdown countryNames={countryNames}/>
        </div>
        <ul className="nav-links">
            <li>
              <NavLink to="/cases">Cases</NavLink>
            </li>
            <li>
              <NavLink to="/deaths">Deaths</NavLink>
            </li>
            <li>
              <NavLink to="/charts">Charts</NavLink>
            </li>
            {/* <li>
              <NavLink to="/">More</NavLink>
            </li> */}
        </ul>
      </nav>
    </React.Fragment>
    
  )
};

export default ThirdPart;
