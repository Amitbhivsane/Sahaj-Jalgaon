import React, { useState } from "react";
import accordionData from "../../data/data.js"; // Import the data file
import { IoMdPerson } from "react-icons/io";
import { FaMobileScreen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import shrimatajif from "../../assets/mataji/shrimatajif.png";
import { useTranslation } from "react-i18next";

// Generate unique taluka and day options dynamically
const talukaOptions = [...new Set(accordionData.map((item) => item.taluka))];
const dayOptions = [...new Set(accordionData.map((item) => item.day))];

const Center = () => {
  const [selectedTaluka, setSelectedTaluka] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on selected taluka, day, and search term
  const filteredData = accordionData.filter(
    (item) =>
      (!selectedTaluka || item.taluka === selectedTaluka) &&
      (!selectedDay || item.day === selectedDay) &&
      (!searchTerm ||
        item.center_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-red-50">
      <img className="w-full h-auto" src={shrimatajif} alt="Shri Mataji" />
      <div className="w-full max-w-3xl mx-auto shadow-2xl m-4 p-6 rounded-lg bg-gradient-to-r from-red-100 to-red-200">
        <h2 className="font-serif font-bold text-xl sm:text-2xl text-pink-700">
          Jalgaon District Meditation Centers
        </h2>
        <p className="font-serif font-bold text-lg sm:text-xl text-cyan-600">
          Jalgaon District has 60+ weekly meditation centers. Any seeker can
          learn and join Sahajayoga Meditation free of cost.
        </p>
        <p className="font-serif font-bold text-lg sm:text-xl text-cyan-600">
          <strong className="text-pink-700">Toll Free No:</strong>{" "}
          <span className="text-cyan-700 text-3xl">1800 2 700 800</span>
        </p>
        <p className="font-serif font-bold text-lg sm:text-xl text-cyan-600">
          Sahajayoga Meditation is always free. All are welcome.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-wrap gap-4 mb-6 p-4">
        <select
          className="p-2 border rounded shadow-sm bg-white text-gray-700"
          value={selectedTaluka}
          onChange={(e) => setSelectedTaluka(e.target.value)}
        >
          <option value="">Select Taluka</option>
          {talukaOptions.map((taluka) => (
            <option key={taluka} value={taluka}>
              {taluka}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded shadow-sm bg-white text-gray-700"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="">Select Day</option>
          {dayOptions.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        {/* Search input */}
        <input
          type="text"
          placeholder="Center Name / Address"
          className="p-2 border rounded shadow-sm bg-white text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Centers List */}
      <div className="w-full max-w-5xl mx-auto flex flex-wrap gap-4 p-4 bg-red-200">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg border p-5 w-full md:w-[48%] lg:w-[32%] transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-lg font-bold text-pink-700 mb-2">
                {/* {item.center_name} */}
                {item.center_name}
              </h2>
              <p className="text-gray-700 text-sm mb-2">
                <strong className="text-cyan-600 font-bold">Address:</strong>{" "}
                {item.address}
              </p>
              <p className="text-gray-600 text-sm">
                <strong className="text-cyan-600 font-bold">Day:</strong>{" "}
                {item.day}{" "}
                <strong className="text-cyan-600 font-bold">Time:</strong>{" "}
                {item.time}
              </p>
              <p className="text-pink-600 text-sm flex items-center gap-2">
                <BsFillPeopleFill size={25} />
                <span>{item.attendence}</span>
              </p>

              <div className="mt-2 p-3 bg-pink-200 rounded">
                <div className="p-4 bg-white shadow-md rounded-lg w-full">
                  <p className="text-red-700 text-sm flex items-center gap-2">
                    <IoMdPerson size={20} /> {item.coordinate1}
                  </p>
                  <p className="text-gray-700 text-sm flex items-center gap-2">
                    <FaMobileScreen size={20} /> {item.coordinate_1_mob}
                  </p>
                  <p className="text-gray-700 text-sm flex items-center gap-2">
                    <MdEmail size={20} /> {item.email1}
                  </p>

                  <div className="border-t border-gray-300 my-3"></div>

                  <p className="text-pink-700 text-sm flex items-center gap-2">
                    <IoMdPerson size={20} /> {item.coordinate2}
                  </p>
                  <p className="text-gray-700 text-sm flex items-center gap-2">
                    <FaMobileScreen size={20} /> {item.coordinate_2_mob}
                  </p>
                  <p className="text-gray-700 text-sm flex items-center gap-2">
                    <MdEmail size={20} /> {item.email2}
                  </p>

                  <div className="border-t border-gray-300 my-3"></div>

                  {/* View on Map */}
                  <div className="flex justify-center items-center mt-2">
                    {item.mapLink && (
                      <a
                        href={item.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold bg-cyan-600 text-white py-1.5 px-12 rounded-lg hover:bg-cyan-700 transition"
                      >
                        View on Map
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full">No centers found.</p>
        )}
      </div>
    </div>
  );
};

export default Center;
//
