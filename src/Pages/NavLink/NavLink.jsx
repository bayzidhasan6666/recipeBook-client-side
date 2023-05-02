import React from 'react';

const NavLink = () => {
  return (
    <NavLink
      to="/"
      exact // Add the exact prop
      className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
    >
      Home
    </NavLink>
  );
};

export default NavLink;
