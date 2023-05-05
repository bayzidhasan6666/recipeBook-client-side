import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div data-aos="fade-up" className=" rounded-lg overflow-hidden shadow-xl">
      <img
        data-aos="fade-left"
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-red-500 font-medium text-lg mb-2">{recipe.name}</h3>
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1c.552 0 1.055.224 1.414.586L15.828 5l-.016.016a2 2 0 01-.469 2.75l-4.547 3.8 1.719 6.453a2 2 0 01-.469 2.25l-.016.015-3.172 2.657a2 2 0 01-2.813-2.267L6.265 14.3 1.641 11.92A2 2 0 011.53 9.16l.015-.118 4.453-3.711a2 2 0 011.414-.731zm-.586 2.293a1 1 0 00-.828.124L5.414 8.586a1 1 0 00-.234 1.391l1.719 2.57-.313 1.172a1 1 0 001.547 1.102l1.953-1.63 1.094.516a1 1 0 001.203-1.304l-.344-1.289 1.219-1.016a1 1 0 00.344-.742l-.141-1.094-2.891-.266a1 1 0 00-.828.407z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600 text-sm">{recipe.rating}</span>
        </div>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-200">
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
