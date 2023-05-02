import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = (props) => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {' '}
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 shadow-xl p-5 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <NavLink
            to="/"
            className="font-semibold italic text-2xl btn tracking-tight text-red-400  font-serif capitalize "
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
                <img
                  className="inline-block h-9 w-9 rounded-full cursor-pointer"
                  src={
                    user.photoURL
                      ? user.photoURL
                      : 'https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png'
                  }
                  alt={user.displayName}
                  title={
                    user.displayName
                      ? user.displayName
                      : 'User Name Not Be Available'
                  }
                />
                <button
                  onClick={handleLogOut}
                  className="ml-4 hover:bg-red-400 text-red-400 font-semibold py-2 px-4 border border-red-400 rounded shadow hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-500 border-white hover:border-transparent hover:text-white hover:bg-green-400 mt-4 md:mt-0"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>

      
    </div>
  );
};

export default Header;
