import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 shadow-xl p-5 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink
          to="/"
          className="font-semibold text-xl tracking-tight text-red-400"
        >
          Recipe Book
        </NavLink>
      </div>
      <div className="flex-grow block w-full md:flex md:items-center md:w-auto">
        <div className="text-sm md:flex-grow">
          <NavLink
            to="/"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
          >
            Blog
          </NavLink>
        </div>
        <div>
          {user ? (
            <div className="flex items-center">
              <span className="text-white mr-2">{user.name}</span>
              <img
                className="inline-block h-8 w-8 rounded-full "
                src={user.photoURL}
                alt={user.displayName}
              />
              <button
                onClick={handleLogOut}
                className="ml-4 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
