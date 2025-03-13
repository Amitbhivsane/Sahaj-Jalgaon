import React from "react";
import { Link } from "react-router-dom";
// import a from "../../assets/a.jpg";
import awarenss from "../../assets/awarenss.jpg";
import shrimatajie from "../../assets/mataji/shrimatajie.png";
import { useTranslation } from "react-i18next";

const Sahajayoga = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-0 bg-red-50">
        {/* Full-width Image */}
        <img
          className="w-full h-auto object-cover"
          src={shrimatajie}
          alt="Sahaja Yoga"
          loading="lazy"
        />

        {/* Main Container */}
        <div className="flex flex-col items-center justify-center text-center py-8 px-4">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-pink-700 uppercase m-4 px-4 leading-tight">
            {t("Welcome to Sahajayoga")}
          </h1>

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {[
              {
                title: t("Everyone Needs Meditation"), // ✅ Correct usage of t()
                text: t(
                  "Today all of humanity is shaken up and going through unprecedented times. Taking care of personal health has never been so crucial. Meditating every day is the key to unlocking the power within each of us."
                ),
              },
              {
                title: t("Sahaja Yoga is Transformational"),
                text: t(
                  "Sahaja Yoga begins with an effortless experience known as Self-Realization. Anybody can do it. Practice for a few days and witness positive changes within yourself."
                ),
              },
              {
                title: t("Unlock The Benefits Today"),
                text: t(
                  "Once you start meditating regularly, you can reduce stress, improve memory, boost confidence, and attain higher spiritual awareness. Get started today!"
                ),
              },
            ].map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-md 
              hover:scale-105 transition-transform duration-300"
              >
                <h5 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-pink-700 leading-snug">
                  {card.title}
                </h5>
                <p className="text-gray-700 font-serif text-justify">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col items-center justify-center text-center bg-red-50 py-8 px-4">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-pink-700 uppercase m-2">
            {t("Learning About Peace Within")}
          </h1>

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {[
              {
                title: t("The Kundalini"),
                text: t(
                  "Your inner energy, or Kundalini, is a soothing spiritual energy that lies dormant at the base of the spine. When awakened, it rises through the central channel, clearing and activating your chakras."
                ),
              },
              {
                title: t("Energy Channels"),
                text: t(
                  "There are three main energy channels (nadis) in your body – left, center, and right. They correspond to your nervous system and connect your chakras, balancing your inner energy and well-being."
                ),
              },
              {
                title: t("Chakras"),
                text: t(
                  "The Chakras (energy centers) control most aspects of our physical, mental, and spiritual lives. Difficulties in life can often be traced to imbalances in one or more chakras."
                ),
              },
            ].map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-md 
              hover:scale-105 transition-transform duration-300"
              >
                <h5 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-pink-700 leading-snug">
                  {card.title}
                </h5>
                <p className="text-gray-700 font-serif text-justify">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="flex flex-col md:flex-row w-full max-w-6xl mt-6">
            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-pink-50 p-8">
              <h1 className="text-3xl font-semibold font-serif text-pink-700 leading-tight">
                {t("It helps you achieve thoughtless awareness")}
              </h1>
              <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
                {t(
                  "Through Sahaja Yoga, you can achieve a state of meditation known as thoughtless awareness. In this state, you experience and enjoy the present moment without distractions. Your consciousness works in flow with your inner energy (Kundalini), bringing peace and balance."
                )}
              </p>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center">
              <img
                src={awarenss}
                alt="Meditation Awareness"
                className="w-full max-w-lg rounded-lg shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-6">
            <Link to="/subtle">
              <button
                className="px-6 py-2 text-cyan-600 border border-cyan-600 rounded-lg font-medium 
            hover:bg-cyan-600 hover:text-white transition duration-300"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sahajayoga;
