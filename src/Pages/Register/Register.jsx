import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

function Register() {
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoURL = event.target.photoURL.value;
    console.log(name, email, password, photoURL);

    // validation
    if (!email || !password) {
      toast.error('Email and password cannot be empty');
      return;
    } else if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        event.target.reset();
        toast.success('User has been created successfully');
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto rounded-xl py-10  p-5 text-gray-300">
      <h1 className="text-3xl font-bold font-serif italic text-emerald-400 mb-6">
        Create an account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold text-gray-400 mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="appearance-none border border-emerald-400 bg-transparent rounded-b-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-gray-400 mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="appearance-none border border-emerald-400 bg-transparent rounded-t-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold text-gray-400 mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="appearance-none border rounded-b-lg border-emerald-400 bg-transparent  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold text-gray-400 mb-2"
            htmlFor="photoURL"
          >
            Photo URL (optional)
          </label>
          <input
            className="appearance-none border border-emerald-400 bg-transparent rounded-t-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="photoURL"
            type="url"
          />
        </div>{' '}
        <div className="flex items-center justify-between">
          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-gray-200 py-2 px-4 font-bold rounded-t-lg focus:outline-none focus:shadow-outline italic"
            type="submit"
          >
            Register
          </button>
          <Link
            to="/login"
            className="inline-block align-baseline italic  text-sm text-red-400 hover:text-red-500 underline"
          >
            Already have an account ?
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
