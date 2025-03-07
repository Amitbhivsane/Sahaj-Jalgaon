import React from "react";
import loga from "../../assets/loga.png";

const Footer = () => {
  return (
    <footer className="bg-pink-700 w-full">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo & Title */}
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img src={loga} className="h-12 w-12" alt="Sahajayoga Logo" />
            <span className="text-2xl font-semibold text-white">
              Sahajayoga Jalgaon
            </span>
          </a>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium">
            {[
              { name: "Shri Mataji", link: "/shree-mataji" },
              { name: "Sahajayoga", link: "/sahaja-yoga" },
              { name: "Centers", link: "/centers" },
              { name: "Download", link: "/download" },
            ].map((item, index) => (
              <li key={index} className="w-full text-center sm:w-auto">
                <a
                  href={item.link}
                  className="hover:underline text-white text-lg font-serif font-bold block sm:inline me-4 md:me-6"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        {/* Footer Text */}
        <span className="block text-sm text-white text-center">
          © 2025{" "}
          <span className="text-white text-sm">
            Designed & Developed by Divine Love
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
