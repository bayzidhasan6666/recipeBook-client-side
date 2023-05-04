import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MenuItems = () => {
  const items = useLoaderData();
  console.log(items.categories);
  return (
    <div>
      <div>
        <h1 className=" text-3xl  text-center py-5 font-serif text-red-500 font-bold italic">
          OUR MENU
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {items.categories.map((item) => (
          <div
            key={item.idCategory}
            className="max-w-sm rounded overflow-hidden shadow-xl mx-4 mb-8"
          >
            <img
              className="w-full"
              src={item.strCategoryThumb}
              alt={item.strCategory}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.strCategory}</div>
              <p className="text-sky-600 text-base">
                {item.strCategoryDescription.slice(0, 100)}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                $29
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {item.strCategory}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
