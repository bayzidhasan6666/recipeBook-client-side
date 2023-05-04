import React from 'react';
import NewsCard from './NewsCard';

function News() {
  const newsData = [
    {
      id: 1,
      title: 'New Recipe Added!',
      description:
        'We just added a new recipe to our collection. Check it out now!',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/53a05cdee4b0c1bc44841a7b/1542172071935-2BDLZXWL2JNBIPYURZSV/101+Food+Photography+Tips',
      date: 'May 1, 2023',
    },
    {
      id: 2,
      title: 'Cooking Tips',
      description: 'Learn how to cook like a pro with our expert cooking tips.',
      imageUrl:
        'https://i1.adis.ws/i/canon/pro-sid-ali-food-photography-trends-2_e5830f8b14d841ecab4f62b476497935?$media-collection-full-dt-jpg$',
      date: 'April 28, 2023',
    },
    {
      id: 3,
      title: 'Cooking Tips',
      description: 'Learn how to cook like a pro with our expert cooking tips.',
      imageUrl:
        'https://blog.sigmaphoto.com/wp-content/uploads/2019/07/cropped-pancakes-scaled.jpg',
      date: 'April 28, 2023',
    },
    // Add more news items here...
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-serif italic pt-10 font-bold text-emerald-400 mb-8">Our News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((newsItem) => (
          <NewsCard key={newsItem.id} {...newsItem} />
        ))}
      </div>
    </div>
  );
}

export default News;
