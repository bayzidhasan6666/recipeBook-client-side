import React, { useEffect, useState, lazy, Suspense, useRef } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import OurMenu from '../OurMenu/OurMenu';
import Reservation from '../Reservation/Reservation';
import News from '../News/News';
import PopularRecipes from '../PopularRecipes/PopularRecipes';
import './Home.css';
import useTitle from '../../DynamicTitle/useTitle';

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
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const [chefs, setChefs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useTitle('Home');

  useEffect(() => {
    fetch(
      'https://b7a10-chef-recipe-hunter-server-side-bayzidhasan6666.vercel.app/chefs'
    )
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  };

  return (
    <>
      {' '}
      <div className="banner-container bg-gray-900 md:flex justify-around container ">
        <div className="banner-text  px-4 py-8 md:w-1/2">
          <h1 className="text-4xl animate-pulse  italic font-bold font-serif text-emerald-400 mb-4 animate__animated animate__fadeInDown">
            <span className="text-5xl text-red-400">W</span>
            <span className="text-red-400">elcome to </span>Recipe Book
          </h1>
          <p className="text-lg animate-pulse text-gray-300 mb-8 animate__animated animate__fadeInUp">
            When the going gets tough, the tough get grilling. Bringing heat to
            your meat. The Wilma is a premium taste that yearns to be savored,
            ground beef between your teeth
          </p>
          <button className="bg-red-400 animate-pulse text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-red-500 animate__animated animate__pulse">
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
      <h1 className="text-center italic text-red-400 text-4xl font-serif py-20">
        Most Famous Chefs
      </h1>
      {chefs.map((chef) => (
        <div key={chef.id}>
          {' '}
          <section className="banner bg-gray-900 py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                  <img
                    className="h-44 w-44 rounded-full object-cover "
                    src={chef.chefPicture}
                    alt="Chef Picture"
                  />
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <h1 className="text-3xl  text-emerald-500 sm:text-4xl font-serif">
                    {chef.chefName}
                  </h1>
                  <p className="mt-3 max-w-2xl text-lg text-gray-500">
                    {chef.bio}
                  </p>
                  <div className="mt-6 flex flex-wrap">
                    <div className="flex items-center mr-6">
                      <span className="text-xl font-semibold text-red-400 italic">
                        {chef.likes}
                      </span>
                      <span className="ml-2 text-blue-500">Likes</span>
                    </div>
                    <div className="flex items-center mr-6">
                      <span className="text-xl font-semibold text-red-400 italic">
                        {chef.yearsOfExperience}
                      </span>
                      <span className="ml-2 text-cyan-400">
                        Years of Experience
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-semibold text-red-400 italic">
                        {chef.numberOfRecipes}
                      </span>
                      <span className="ml-2 text-emerald-400">
                        Number of Recipes
                      </span>
                      <Link
                        to={`/recipes/${chef.id}`}
                        className="border border-sky-500 px-3 py-1 text-cyan-400 hover:text-cyan-500 hover:border-cyan-500 ml-5"
                      >
                        View Recipes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
      {/* Our Menu section  */}
      <div>
        {' '}
        <section>
          <OurMenu></OurMenu>
        </section>
        <section>
          <PopularRecipes></PopularRecipes>
        </section>
        <section>
          <Reservation></Reservation>
        </section>
        <section>
          <News></News>
        </section>
      </div>
    </>
  );
};

export default Home;
