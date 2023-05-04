import React from 'react';
import Lottie from 'lottie-react';
import spinner from '/src/assets/18563-cooking';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center mx-auto bg-gray-900 items-center h-[calc(100vh-68px)]">
      <Lottie animationData={spinner} loop={true}></Lottie>
    </div>
  );
};

export default LoadingSpinner;
