'use strict';

import React from 'react';

const NavIcon = props => (
  <a className='nav-icon'>
    <svg width="46px" height="46px" viewBox="0 0 96 96" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g className='nav-icon__container'>
        <circle className='nav-icon__edge' style={{ strokeWidth: "6px" }} cx="44" cy="44" r="44"></circle>
        <rect className='[  nav-icon__line  nav-icon__line--1  ]' rx="3.5" />
        <rect className='[  nav-icon__line  nav-icon__line--2  ]' rx="3.5" />
      </g>
    </svg>
  </a>
);

export default NavIcon;