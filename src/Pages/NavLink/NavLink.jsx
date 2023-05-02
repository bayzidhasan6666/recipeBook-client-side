import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'border-b border-purple-500' : ''
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLink;
