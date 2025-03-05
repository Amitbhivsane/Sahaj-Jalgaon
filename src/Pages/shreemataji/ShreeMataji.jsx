import React from "react";
import a from "../../assets/a.jpg";
import shrimataji_young from "../../assets/shrimataji_young.jpg";
import { Link } from "react-router-dom";

const ShreeMataji = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Image */}
      <img className="h-auto w-full" src={a} alt="Shri Mataji" />

      {/* Title Section */}
      <div className="flex flex-col items-center text-center py-6">
        <h1 className="text-5xl font-semibold font-serif text-pink-700 uppercase">
          H.H. Shri Mataji Nirmala Devi
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Biography */}
        <div className="w-full md:w-1/2 bg-gray-100 p-8 ">
          <h2 className=" text-3xl font-semibold font-serif text-pink-700 leading-tight">
            Birth and Childhood
          </h2>
          <h6 className="text-xl font-bold mt-2 text-cyan-700">
            March 21, 1923
          </h6>

          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            Shri Mataji Nirmala Devi was born on March 21, 1923, into the Salve
            family in Chhindwara, India. Her parents,
            <span className="text-cyan-600 font-bold">
              {" "}
              Prasad and Cornelia Salve
            </span>
            , were direct descendants of the royal
            <span className="text-cyan-600 font-bold">
              {" "}
              Shalivahana Dynasty
            </span>
            . Seeing the beauty of this child, who was born with a spotless
            brilliance, they called her{" "}
            <span className="text-cyan-600 font-bold">Nirmala</span>, which
            means “immaculate.”
          </p>

          <p className="mt-4 text-lg font-serif text-gray-800 leading-relaxed">
            Later on, she became known to the world as
            <span className="text-cyan-600 font-bold">
              {" "}
              Shri Mataji Nirmala Devi
            </span>{" "}
            – the revered Mother, who was born with her
            <span className="text-cyan-600 font-bold">
              {" "}
              complete Self-Realization{" "}
            </span>
            and knew from a very young age that she had a unique gift to share
            with humanity.
          </p>

          <p className="mt-4 text-lg font-serif text-gray-800 leading-relaxed">
            Her parents played a key role in
            <span className="text-cyan-600 font-bold">
              {" "}
              India’s Liberation Movement{" "}
            </span>
            from British rule. Her father, a close associate of
            <span className="text-cyan-600 font-bold"> Mahatma Gandhi</span>,
            was a member of the{" "}
            <span className="text-cyan-600 font-bold">
              {" "}
              Constituent Assembly of India{" "}
            </span>
            and helped draft India’s first constitution. He was a scholar fluent
            in
            <span className="text-cyan-600 font-bold"> 14 languages</span> and
            translated the
            <span className="text-cyan-600 font-bold"> Quran into Marathi</span>
            . Her mother was the{" "}
            <span className="text-cyan-600 font-bold">
              {" "}
              first woman in India{" "}
            </span>
            to receive an Honors Degree in Mathematics.{" "}
            <Link to="https://shrimataji.org/">
              <button className="inline-flex items-center px-4 py-2 text-gray-800 border border-gray-600 rounded-lg font-medium hover:bg-cyan-600 hover:text-white transition duration-300">
                Read More
              </button>
            </Link>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col items-center">
          <img
            src={shrimataji_young}
            alt="Shri Mataji Young"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ShreeMataji;
