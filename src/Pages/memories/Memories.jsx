import React, { useState, useEffect } from "react";
import tarsod2 from "../../assets/mataji/tarsod2.png";

// Import all images
import a1 from "../../assets/old/a1.jpeg";
import a2 from "../../assets/old/a2.jpeg";
import a3 from "../../assets/old/a3.jpeg";
import a4 from "../../assets/old/a4.jpeg";
import a5 from "../../assets/old/a5.jpeg";
import a6 from "../../assets/old/a6.jpeg";
import a7 from "../../assets/old/a7.jpeg";
import a8 from "../../assets/old/a8.jpeg";
import a9 from "../../assets/old/a9.jpeg";
import a10 from "../../assets/old/a10.jpeg";
import a11 from "../../assets/old/a11.jpeg";
import a12 from "../../assets/old/a12.jpeg";
import a13 from "../../assets/old/a13.jpeg";
import a14 from "../../assets/old/a14.jpeg";
import a15 from "../../assets/old/a15.jpeg";
import a16 from "../../assets/old/a16.jpeg";
import a17 from "../../assets/old/a17.jpeg";
import a18 from "../../assets/old/a18.jpeg";
import a19 from "../../assets/old/a19.jpeg";
import a20 from "../../assets/old/a20.jpeg";
import a21 from "../../assets/old/a21.jpeg";
import a22 from "../../assets/old/a22.jpeg";
import a23 from "../../assets/old/a23.jpeg";
import a24 from "../../assets/old/a24.jpeg";
import a25 from "../../assets/old/a25.jpeg";
import a26 from "../../assets/old/a26.jpeg";
import a27 from "../../assets/old/a27.jpeg";
import a28 from "../../assets/old/a28.jpeg";
import a29 from "../../assets/old/a29.jpeg";
import a30 from "../../assets/old/a30.jpeg";
import a31 from "../../assets/old/a31.jpeg";

const imageData = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
  a21,
  a22,
  a23,
  a24,
  a25,
  a26,
  a27,
  a28,
  a29,
  a30,
  a31,
];

// Function to shuffle images
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Memories = () => {
  const [shuffledImages, setShuffledImages] = useState(imageData);

  useEffect(() => {
    const changeImages = () => {
      setShuffledImages(shuffleArray(imageData));
    };

    // Set interval to shuffle images every 2 hours (7200000 ms)
    const interval = setInterval(changeImages, 30000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-0 bg-red-50">
      {/* Full-width Hero Image */}
      <img
        className="w-full h-auto object-cover"
        src={tarsod2}
        alt="Sahaja Yoga"
        loading="lazy"
      />

      {/* Content Section */}
      <div className="bg-red-50 mt-4 w-full px-4 md:px-10">
        <h1 className="text-center font-serif text-3xl md:text-4xl text-pink-700 font-bold mb-5">
          Sahaj Mandir Tarsod Memories
        </h1>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {shuffledImages.map((src, index) => (
            <div key={index} className="p-1">
              <img
                className="w-full h-auto rounded-lg shadow-md transform transition duration-300 hover:scale-105"
                src={src}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;
