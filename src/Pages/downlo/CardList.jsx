import React from "react";

const cardData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Sahajyoga Introduction",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "The Subtle System",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Meditation Method",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Meditation Method",
  },
];

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {/* 🔴 Heading */}
      <h1 className="w-full text-center font-serif text-pink-700 text-3xl font-bold mb-5">
        SAHAJA YOGA PDF BOOKS FOR FREE DOWNLOAD
      </h1>

      {cardData.map((card) => (
        <div
          key={card.id}
          className="w-60 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          {/* 📌 Image */}
          <img
            className="w-full h-64 object-cover  font-serif rounded-t-lg"
            src={card.image}
            alt={card.title}
          />

          {/* 📌 Card Content */}
          <div className="p-5 bg-red-300 rounded-b-lg">
            <h5 className="text-center text-lg font-serif  text-cyan-700">
              {card.title}
            </h5>

            {/* 📌 Download Button */}
            <a
              href="#"
              className="mt-3 inline-flex w-full justify-center px-3 py-2 text-sm font-medium text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
