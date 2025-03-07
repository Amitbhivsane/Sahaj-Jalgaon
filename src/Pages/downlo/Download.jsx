import React, { useEffect, useState } from "react";

// import a from "../../assets/a.jpg";
// import b from "../../assets/a.jpg";
import CardList from "./CardList";
// import ShriMatajig from "../../assets/mataji/ShriMatajig.jpg";
import shreeem from "../../assets/mataji/shreeem.png";

// const images = [a, b];

const Download = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false); // Stops auto-slide when clicked

  // const prevSlide = () => {
  //   setIsManual(true);
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setIsManual(true);
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // useEffect(() => {
  //   if (isManual) return; // Stop auto-slide if user clicks manually

  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [isManual]);
  return (
    <>
      <div className="flex flex-col items-center min-h-screen  bg-red-50">
        {/* Full-width Image */}
        <img
          className="w-full h-auto object-cover"
          src={shreeem}
          alt="Sahaja Yoga"
          loading="lazy"
        />
        {/* card */}
        <div className="bg-red-100 flex justify-center items-center m-8">
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Download;
