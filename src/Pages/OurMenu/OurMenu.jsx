import React from 'react';
import { Link } from 'react-router-dom';

const OurMenu = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content grid md:grid-cols-3  md:gap-10 flex-col lg:flex-row-reverse">
          <img
            src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?b=1&s=170667a&w=0&k=20&c=ipMtvr-QmWrqBWleY3aVy7-uiyw9NYqTT6nm8vfuVRc="
            className="max-w-sm rounded-lg shadow-2xl lg:w-96 md:w-64 md:h-44 lg:h-64 w-full"
          />
          <div className=" lg:w-96 md:w-64 md:h-44 h-64">
            {' '}
            <h1 className="lg:text-4xl text-3xl  font-serif text-red-500 font-bold italic">
              Checkout <br />
              <span className="text-emerald-500"> OUR MENU</span>
            </h1>
            <div>
              <p className="py-6 md:hidden lg:flex ">
                Exercitation photo booth stumptown tote bag Banksy, elit small
                batch freegan sed. Craft beer elit seitan exercitation.
              </p>
              <Link to={`/menu`}>
                {' '}
                <button className="border border-red-400 text-red-400 capitalize px-3 py-1">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
            className="max-w-sm rounded-lg shadow-2xl lg:w-96 md:w-64 md:h-44 lg:h-64 w-full "
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNoSZw_U817tU-_NcGuJ0zUBfkIZTGBUQuloRdDz3CZMvVaSnpkNdewsvUXE7tsV_5UM&usqp=CAU"
            className="max-w-sm rounded-lg shadow-2xl lg:w-96 md:w-64 md:h-44 lg:h-64 w-full"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYemttHJHrJmB9XlZdPbKO-yXw5TgkxT7L7ks9JXU_O4zXeDf9-WPggqn2WMzcf7hkw8&usqp=CAU"
            className="max-w-sm rounded-lg shadow-2xl lg:w-96 md:w-64 md:h-44 lg:h-64 w-full"
          />
          <img
            src="https://b.zmtcdn.com/data/pictures/4/19566894/e84b37bb55fe2ffed26a60caa4a269c8.jpg"
            className="max-w-sm rounded-lg shadow-2xl lg:w-96 md:w-64 md:h-44 lg:h-64 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
