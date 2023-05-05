import React from 'react';

function NewsCard({ title, description, imageUrl, date }) {
  return (
    <div
      className="bg-gray-900 text-gray-300 rounded-lg shadow-xl overflow-hidden"
      data-aos="fade-left"
    >
      <img
        data-aos="fade-right"
        className="w-full h-40 object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
}

export default NewsCard;
