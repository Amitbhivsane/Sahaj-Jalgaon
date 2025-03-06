import React, { useState } from "react";
import { Link } from "react-router-dom";
import loga from "../../assets/loga.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Shree Mataji", link: "/shree-mataji" },
    { name: "Sahaja Yoga", link: "/sahaja-yoga" },
    { name: "Centers", link: "/centers" },
    { name: "Pooja", link: "/events" },
    { name: "Download", link: "/download" },
    { name: "Memories", link: "/memories" },
  ];

  return (
    <nav className="bg-white fixed  h-20 left-0 w-full z-50 shadow-md border-gray-200 dark:bg-pink-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={loga} className="h-10 w-10" alt="Sahaja Yoga Logo" />
          <span className="text-2xl font-semibold font-serif dark:text-white">
            SahajaYoga Jalgaon
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden text-white bg-pink-700 p-2 rounded-lg hover:bg-pink-200 focus:ring-2 focus:ring-pink-400"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M3 12h18M3 17h18"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className="font-serif flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
                         md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-pink-700 md:dark:bg-pink-700 uppercase"
          >
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 rounded-sm md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent 
                             md:hover:text-blue-700 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
