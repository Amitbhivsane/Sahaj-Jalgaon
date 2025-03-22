import React, { useState } from "react";
import { Link } from "react-router-dom";
import loga from "../../assets/loga.png";
import LanguageOptions from "../langdropdown/LanguageOptions";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
    setIsOpen(false); // Close mobile menu when language is selected
  };

  const navLinks = [
    { name: t("Home"), link: "/" },
    { name: t("Shree Mataji"), link: "/shree-mataji" },
    { name: t("Sahaja Yoga"), link: "/sahaja-yoga" },
    { name: t("Centers"), link: "/centers" },
    // { name: "Events", link: "/events" },
    { name: t("Download"), link: "/download" },
    // { name: "Memories", link: "/memories" },
  ];

  return (
    <nav className="bg-pink-700 fixed h-20 left-0 w-full z-50 shadow-md border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={loga} className="h-10 w-10" alt="Sahaja Yoga Logo" />
          <span className="text-2xl font-semibold font-serif text-white">
            {t("SahajaYoga Jalgaon")}
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden text-white bg-pink-700 p-2 rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-pink-400"
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
          className={`${
            isOpen ? "block bg-pink-700" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className={`font-serif flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
                        md:flex-row md:space-x-8 md:mt-0 md:border-0 uppercase 
                        md:bg-transparent ${
                          isOpen ? "bg-pink-700" : "bg-pink-700"
                        }`}
          >
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 rounded-sm md:p-0 text-white hover:bg-pink-600 
                             md:hover:bg-transparent md:hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* Language Dropdown Added Below "Memories" */}
            <li className="mt-2 md:mt-0 text-white">
              <LanguageOptions onChange={handleClick} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
