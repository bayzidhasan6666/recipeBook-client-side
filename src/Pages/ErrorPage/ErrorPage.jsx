import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react';
import errorAnime from '/src/assets/45730-recipes-book-animation';
import useTitle from '../../DynamicTitle/useTitle';
const ErrorPage = () => {
  const { error, status, statusText } = useRouteError();
  useTitle('Error Page');

  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-800 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <Lottie animationData={errorAnime} loop={true}></Lottie>
            <p className="text-gray-300 animate-pulse mb-2 text-lg italic font-mono">
              Oops!! {statusText}!!
            </p>
            <p className="text-2xl italic font-semibold md:text-3xl text-red-500 mb-5">
              {error?.message}
            </p>
            <Link
              to="/"
              className="border border-cyan-400 px-3 py-1 font-semibold hover:border-red-500 hover:text-orange-400 text-emerald-400"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
