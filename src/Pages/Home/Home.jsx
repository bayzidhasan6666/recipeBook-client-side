import React, { useState } from 'react';

const images = [
  {
    url: 'https://www.warpaintjournal.com/wp-content/uploads/2020/08/Indian-Cuisine.jpg',
    alt: 'Banner Image 1',
  },
  {
    url: 'https://static.toiimg.com/thumb/90154368.cms?width=680&height=512&imgsize=228592',
    alt: 'Banner Image 2',
  },
  {
    url: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/DP1.jpg',
    alt: 'Banner Image 3',
  },
];
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  };

  return (
    <div className="banner-container bg-gray-900 md:flex justify-around container ">
      <div className="banner-text px-4 py-8 md:w-1/2">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Recipe Book
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-300">
          Learn More
        </button>
      </div>
      <div className="banner-slider relative md:w-1/2">
        <img
          src={images[activeIndex].url}
          alt={images[activeIndex].alt}
          className="md:w-full lg:11/12 h-96 object-cover rounded-lg"
        />
        <div className="slider-controls absolute bottom-0 right-0 mb-4 mr-4">
          <button
            className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-300"
            onClick={handlePrevClick}
          >
            Previous
          </button>
          <button
            className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-300 ml-4"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
