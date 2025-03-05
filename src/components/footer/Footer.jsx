import React from "react";
import loga from "../../assets/loga.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded shadow-sm dark:bg-pink-700 m-0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={loga} className="h-12 w-12" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Sahajyoga Jalgaon
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-cyan-600 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="/shree-mataji"
                  className="hover:underline  text-white text-xl font-serif font-bold me-4 md:me-6"
                >
                  Shri Mataji
                </a>
              </li>
              <li>
                <a
                  href="/sahaja-yoga"
                  className="hover:underline text-white text-xl font-serif font-bold me-4 md:me-6"
                >
                  Sahajayoga
                </a>
              </li>
              <li>
                <a
                  href="/centers"
                  className="hover:underline text-white text-xl font-serif font-bold me-4 md:me-6"
                >
                  Centers
                </a>
              </li>
              <li>
                <a
                  href="download/"
                  className="hover:underline text-white font-serif font-bold  text-xl"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-cyan-300-500 sm:text-center dark:text-cyan-300">
            © 2025{" "}
            <span className="text-cyan-300 text-sm">
              Designed Developed by Sahajayoga Jalgaon Digital Team
            </span>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
