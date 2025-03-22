import React from "react";
import Hindi from "../../assets/book/Hindi.png";
import marathi from "../../assets/book/marathi.png";
import med from "../../assets/book/med.png";
import subtel from "../../assets/book/subtel.png";

const cardData = [
  {
    id: 1,
    image: med,
    title: "Steps for Getting Self Realization (M,H,E)",
    downloadLink: "/pdfs/med-book.pdf",
  },
  {
    id: 2,
    image: marathi,
    title: "Sahajayoga Introduction Marathi",
    downloadLink: "/pdfs/sahajyoga-marathi.pdf",
  },
  {
    id: 3,
    image: subtel,
    title: "Sahajayoga Subtle System Hindi",
    downloadLink: "/pdfs/subtle-system-hindi.pdf",
  },
  {
    id: 4,
    image: Hindi,
    title: "Sahajayoga Introduction Hindi",
    downloadLink: "/pdfs/sahajyoga-new-hindi.pdf",
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
          className="w-60 bg-red-300 border-gray-300 rounded-lg shadow-sm transform transition duration-300 hover:scale-105"
        >
          {/* 📌 Image */}
          <img
            className="w-full h-65 object-cover font-serif rounded-t-lg"
            src={card.image}
            alt={card.title}
          />

          {/* 📌 Card Content */}
          <div className="p-5 bg-red-300 rounded-b-lg">
            <h5 className="text-center text-lg font-serif text-cyan-700">
              {card.title}
            </h5>

            {/* 📌 Download Button */}
            <a
              href={card.downloadLink} // Dynamic download link
              download
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
