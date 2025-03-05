import React, { useState, useEffect } from "react";
import a from "../../assets/a.jpg";
import b from "../../assets/a.jpg";

const images = [a, b];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false); // Stops auto-slide when clicked

  const prevSlide = () => {
    setIsManual(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIsManual(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (isManual) return; // Stop auto-slide if user clicks manually

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isManual]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full max-w-screen-xl mx-auto bg-gray-100">
        <div className="relative h-56 md:h-[550px] overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
              }`}
              onClick={() => {
                setIsManual(true);
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 hover:bg-white/50 transition duration-300"
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 6 10" fill="none">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 hover:bg-white/50 transition duration-300"
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 6 10" fill="none">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>

      {/* Awareness Section */}
      <section className="bg-gray-700-700 py-8 px-4 text-center">
        <div className="mx-auto max-w-screen-xl">
          <h1 className="mb-4 text-4xl font-semibold font-serif text-pink-700 tracking-tight md:text-5xl lg:text-6xl">
            New Awareness
          </h1>
          <p className="text-xl  md:text-2xl text-gray-800 font-serif leading-relaxed max-w-3xl mx-auto p-4 md:p-6">
            " When you get your self-realization or your second birth, you
            become entitled to an awareness by which you can find out the roots
            of everything. You can find out the roots of why people get sick,
            why there are incurable diseases, why there are psychological
            problems, why there are moral crises, why there are political
            problems, why there are economic problems. "
          </p>
          <p className="text-cyan-700 text-xl font-semibold font-serif block mt-4">
            1987 – October 12 Public Program, Vienna, Austria
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
