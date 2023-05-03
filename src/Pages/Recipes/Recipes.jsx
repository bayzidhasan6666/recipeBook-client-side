import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
  const recipes = useLoaderData();
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (recipe) => {
    setFavorites((prevState) => [...prevState, recipe]);
    toast.success(`${recipe.name} has been added to your favorites.`);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="shadow-xl overflow-hidden rounded-lg">
          <img
            className="h-96 lg:h-full w-full object-cover"
            src={recipes.chefPicture}
            alt={recipes.chefName}
          />
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-cyan-500">
              {recipes.chefName}
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {recipes.bio}
            </p>
            <p className="mt-2 text-sky-600">Likes: {recipes.likes}</p>
            <p className="mt-2 text-pink-500">
              Number of Recipes: {recipes.numberOfRecipes}
            </p>
            <p className="mt-2 text-cyan-500">
              Years of Experience: {recipes.yearsOfExperience}
            </p>
          </div>
        </div>
        <div className="  shadow-xl space-y-3 overflow-hidden rounded-lg">
          {recipes.recipes.map((recipe, index) => (
            <div
              key={index}
              className="px-4 border border-indigo-400 shadow-xl rounded-lg py-5 sm:p-6"
            >
              <h3 className="text-lg leading-6 font-serif font-medium text-red-400">
                {recipe.name}
              </h3>
              <ul className="mt-2 max-w-2xl text-sm text-sky-500">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient} className="mt-1">
                    {ingredient}
                  </li>
                ))}
              </ul>
              <p className="mt-2 max-w-2xl text-sm text-gray-500">
                {recipe.method}
              </p>
              <p className="mt-2 text-sky-400">
                Rating: <span className="text-pink-500">{recipe.rating}</span>
              </p>

              {favorites.includes(recipe) ? (
                <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                  Favorite
                </button>
              ) : (
                <button
                  className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                  disabled={favorites.includes(recipe)}
                  onClick={() => handleFavoriteClick(recipe)}
                >
                  Favorite
                </button>
              )}
            </div>
          ))}
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Recipes;
