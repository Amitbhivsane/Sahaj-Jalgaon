import React, { useState } from "react";
import accordionData from "../../data/datapuja";
import a from "../../assets/a.jpg";

const Events = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-0 bg-pink-50 ">
        {/* Header Image */}
        <img className="w-full h-auto object-cover" src={a} alt="Shri Mataji" />

        {/* Title Section */}
        <div className="flex flex-col items-center text-center py-8 px-6 ">
          <h1 className="text-3xl font-semibold font-serif text-pink-700 uppercase">
            H.H. Shri Mataji Nirmala Devi Pooja Calendar 2025 Tarsod Jalgaon
          </h1>
        </div>

        {/* Accordion Section */}
        <div className="w-full max-w-4xl mx-auto mb-5">
          {accordionData.map((item, index) => (
            <div className="bg-red-50" key={index}>
              <h2 id={`accordion-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium font-serif text-gray-100 border border-gray-100 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-100 dark:border-gray-200 dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-red-100 gap-3"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-body-${index}`}
                >
                  <span className="text-pink-900 font-serif font-bold">
                    {item.Puja}
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-body-${index}`}
                className={
                  openIndex === index
                    ? "p-5 border border-gray-200 dark:border-gray-200"
                    : "hidden"
                }
                aria-labelledby={`accordion-heading-${index}`}
              >
                <p className="mb-2 font-serif text-gray-500 dark:text-pink-700">
                  Date: {item.date}
                </p>
                <p className="mb-2 font-serif text-gray-500 dark:text-cyan-600">
                  Day: {item.day}
                </p>
                <p className="mb-2 font-serif text-gray-500 dark:text-pink-700">
                  Time: 11 AM
                </p>
                <p className="mb-2 font-serif text-gray-500 dark:text-cyan-600">
                  Place: {item.place}
                </p>
                <p className="mb-2 font-serif text-gray-500 dark:text-pink-700">
                  Collectivity: {item.Taluka}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
