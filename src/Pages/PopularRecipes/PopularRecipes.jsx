import React from 'react';
import RecipeCard from './RecipeCard';

function PopularRecipes() {
  const popularRecipes = [
    {
      id: 1,
      name: 'Spicy Chicken Stir-Fry',
      imageUrl:
        'https://www.marionskitchen.com/wp-content/uploads/2022/09/Korean-Dakgalbi-Spicy-Chicken-Vegetables-01.jpg',
      description:
        'This spicy chicken stir-fry is a quick and easy meal that is perfect for busy weeknights.',
      rating: 4.5,
      reviews: 25,
      author: 'John Smith',
      authorImageUrl:
        'https://www.marionskitchen.com/wp-content/uploads/2022/09/Korean-Dakgalbi-Spicy-Chicken-Vegetables-01.jpg',
    },
    {
      id: 2,
      name: 'Pesto Pasta with Roasted Tomatoes',
      imageUrl:
        'https://simply-delicious-food.com/wp-content/uploads/2019/07/roasted-tomato-pesto-pasta-with-ricotta-4.jpg',
      description:
        'This pesto pasta with roasted tomatoes is a delicious and easy vegetarian meal that is perfect for any night of the week.',
      rating: 4.2,
      reviews: 18,
      author: 'Jane Doe',
      authorImageUrl: 'https://via.placeholder.com/50x50.png?text=Author+Image',
    },
    {
      id: 3,
      name: 'Garlic Shrimp Scampi',
      imageUrl:
        'https://www.cookingclassy.com/wp-content/uploads/2019/07/shrimp-scampi-02.jpg',
      description:
        'This garlic shrimp scampi is a classic Italian dish that is sure to please any seafood lover.',
      rating: 4.8,
      reviews: 35,
      author: 'Mark Johnson',
      authorImageUrl: 'https://via.placeholder.com/50x50.png?text=Author+Image',
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center font-serif  mb-8 text-red-400">Popular Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {popularRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularRecipes;
