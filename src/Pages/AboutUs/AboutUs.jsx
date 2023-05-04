import React from 'react';
import 'leaflet/dist/leaflet.css';
import Leaflet from '../Leaflet/Leaflet';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className=" italic  font-serif text-3xl text-emerald-500 text-center font-semibold tracking-wide ">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-serif leading-8 font-extrabold tracking-tight text-red-400 text-center sm:text-4xl">
            We are passionate about good food
          </p>
        </div>
        {/* About section */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="border border-yellow-400 rounded-lg shadow-lg overflow-hidden">
            <img
              src={
                'https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc='
              }
              alt="Our story"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Our story</h3>
              <p className="text-yellow-400 text-sm leading-relaxed">
                Recipe Book Restaurant is a family-owned business founded in
                1990. We are located in the heart of downtown and have been
                serving delicious food to our customers ever since. Our menu
                features a wide variety of dishes inspired by cuisines from
                around the world, and we take pride in using only the freshest
                ingredients in all of our recipes.
              </p>
            </div>
          </div>

          <div className="border  rounded-lg shadow-lg overflow-hidden">
            <img
              src={
                'https://media.thekashmirmonitor.net/wp-content/uploads/2022/11/cznburak_1-1.jpg'
              }
              alt="Our team"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Our team</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our team is made up of experienced chefs, servers, and managers
                who are passionate about providing our customers with an
                unforgettable dining experience. Whether you're here for a
                romantic dinner for two or a family celebration, we are
                committed to making your visit to Recipe Book Restaurant a
                memorable one.
              </p>
            </div>
          </div>

          <Link to={`/leaflet`}>
            {' '}
            <div className="border-teal-400 border rounded-lg shadow-lg overflow-hidden">
              <img
                src={'https://cdn-icons-png.flaticon.com/512/1865/1865269.png'}
                alt="Our location"
                className="w-full  object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Our location</h3>
                <p className="text-teal-400 text-sm leading-relaxed">
                  Recipe Book Restaurant, 123 Main St, Downtown
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* Map section */}{' '}
        <div className="relative h-96 my-10">
          <Leaflet />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-lg font-semibold mb-2">Our location</h3>
            <p className="text-sm text-gray-400">
              Recipe Book Restaurant, 123 Main St, Downtown
            </p>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="border flex mx-auto w-fit border-cyan-400 px-3 py-1 font-semibold hover:border-red-500 hover:text-orange-400 text-emerald-400"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default AboutUs;
