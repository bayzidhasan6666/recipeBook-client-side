import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 shadow-xl p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-semibold text-xl tracking-tight">
          Recipe Book
        </Link>
      </div>
      <div className="flex-grow block w-full md:flex md:items-center md:w-auto">
        <div className="text-sm md:flex-grow">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
          >
            Blog
          </Link>
        </div>
        <div>
          {user ? (
            <div className="flex items-center">
              <span className="text-white mr-2">{user.name}</span>
              <img
                className="inline-block h-8 w-8 rounded-full"
                src={user.photoUrl}
                alt={user.name}
              />
              <button
                onClick={onLogout}
                className="ml-4 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
