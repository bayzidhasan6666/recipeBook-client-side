import React from 'react';

const Reservation = () => {
  return (
    <div
      className="hero  h-96 w-10/12 mx-auto rounded-xl"
      style={{
        backgroundImage: `url("https://cdn.profoto.com/cdn/05238cd/globalassets/tips-and-tricks/profoto-c1-plus-food-photography-anders-hannola.jpg?width=1280&quality=75&format=jpg")`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-serif text-white font-bold">
            Make an online <br /> Reservation
          </h1>
          <p className="mb-5 text-gray-100">
            When the going gets tough, the tough get grilling. Bringing heat to
            your meat. No one can compete with our meat
          </p>
          <button className="px-3 py-1 hover:bg-red-600 bg-red-500 font-semibold text-white uppercase">Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
