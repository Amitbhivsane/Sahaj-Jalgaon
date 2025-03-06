import React from "react";
import { Link } from "react-router-dom";
import a from "../../assets/a.jpg";
import shrimataji_young from "../../assets/shrimataji_young.jpg";

const ShreeMataji = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-0 bg-gray-100">
      {/* Header Image */}
      <img
        className=" w-full object-cover max-h-[800px]"
        src={a}
        alt="Shri Mataji Banner"
      />

      {/* Title Section */}
      <div className="flex flex-col items-center text-center py-6 px-4">
        <h1 className="text-3xl sm:text-5xl font-semibold font-serif text-pink-700 uppercase">
          H.H. Shri Mataji Nirmala Devi
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Biography */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 md:p-8">
          <h2 className="text-3xl font-semibold font-serif text-pink-700">
            Birth and Childhood
          </h2>
          <h6 className="text-xl font-bold mt-2 text-cyan-700">
            March 21, 1923
          </h6>

          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            Shri Mataji Nirmala Devi was born on <strong>March 21, 1923</strong>
            , into the Salve family in Chhindwara, India. Her parents,{" "}
            <strong className="text-cyan-600">Prasad and Cornelia Salve</strong>
            , were direct descendants of the royal{" "}
            <strong className="text-cyan-600">Shalivahana Dynasty</strong>.
            Seeing the brilliance of this child, they named her{" "}
            <strong className="text-cyan-600">Nirmala</strong>, meaning
            “immaculate.”
          </p>

          <p className="mt-4 text-lg font-serif text-gray-800 leading-relaxed">
            Later, she became known to the world as{" "}
            <strong className="text-cyan-600">Shri Mataji Nirmala Devi</strong>,
            who was born with{" "}
            <strong className="text-cyan-600">complete Self-Realization</strong>
            . Her parents played a key role in{" "}
            <strong className="text-cyan-600">
              India’s Liberation Movement
            </strong>
            . Her father, a close associate of{" "}
            <strong className="text-cyan-600">Mahatma Gandhi</strong>, helped
            draft India’s first constitution.
          </p>

          <p className="mt-4 text-lg font-serif text-gray-800 leading-relaxed">
            Her mother was the{" "}
            <strong className="text-cyan-600">first woman in India</strong> to
            receive an Honors Degree in Mathematics.
          </p>

          {/* Read More Button */}
          <div className="mt-6">
            <Link to="https://shrimataji.org/">
              <button
                className="px-5 py-2 text-gray-800 border border-gray-600 rounded-lg font-medium 
                                 hover:bg-cyan-600 hover:text-white transition duration-300"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 md:p-8 flex flex-col items-center">
          <img
            src={shrimataji_young}
            alt="Shri Mataji Young"
            className="w-full max-w-lg rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ShreeMataji;
