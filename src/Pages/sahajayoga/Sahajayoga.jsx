import React from "react";
import a from "../../assets/a.jpg";
import { Link } from "react-router-dom";
import awarenss from "../../assets/awarenss.jpg";
const Sahajayoga = () => {
  return (
    <>
      {/* Full-width Image */}
      <img className="w-full h-auto" src={a} alt="Sahaja Yoga" />

      {/* Main Container */}
      <div className="flex flex-col items-center justify-center text-center bg-gray-100 p-4">
        {/* Heading */}
        <h1 className="text-5xl sm:text-4xl font-bold font-serif text-pink-700 m-2 uppercase">
          Welcome to Sahajayoga
        </h1>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {/* Card 1 */}
          <div
            className="w-full sm:w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-md 
            hover:scale-105 transition-transform duration-300"
          >
            <h5 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight text-pink-700 leading-snug">
              Everyone Needs <br /> Meditation
            </h5>
            <p className="text-gray-700 font-serif text-justify">
              Today all of humanity is shaken up and going through unprecedented
              times. Taking care of personal health has never been so crucial.
              Meditating every day is the key to unlocking the power within each
              of us.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="w-full sm:w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-md 
            hover:scale-105 transition-transform duration-300"
          >
            <h5 className="mb-2 text-2xl sm:text-3xl font-bold font-serif tracking-tight text-pink-700 leading-snug">
              Sahaja Yoga is <br /> Transformational
            </h5>
            <p className="text-gray-700 font-serif text-justify">
              Sahaja Yoga begins with an effortless experience known as
              Self-Realization. Anybody can do it. Practice for a few days and
              witness positive changes within yourself.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="w-full sm:w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-md 
            hover:scale-105 transition-transform duration-300"
          >
            <h5 className="mb-2 text-2xl sm:text-3xl font-bold  font-serif tracking-tight text-pink-700 leading-snug">
              Unlock The Benefits <br /> Today
            </h5>
            <p className="text-gray-700  font-serif text-justify">
              Once you start meditating regularly, you can reduce stress,
              improve memory, boost confidence, and attain higher spiritual
              awareness. Get started today!
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col items-center justify-center text-center bg-gray-100 p-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-pink-700 m-2 uppercase">
          Learning About Peace Within
        </h1>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {/* Card 4 */}
          <div
            className="w-full sm:w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-md 
            hover:scale-105 transition-transform duration-300"
          >
            <h5 className="mb-2 text-2xl sm:text-3xl font-bold font-serif tracking-tight text-pink-700 leading-snug">
              The Kundalini
            </h5>
            <p className="text-gray-700 font-serif text-justify">
              Your inner energy, or Kundalini, is a soothing spiritual energy
              that lies dormant at the base of the spine. When awakened, it
              rises through the central channel, clearing and activating your
              chakras, allowing you to achieve Self-Realization.
            </p>
          </div>

          {/* Card 5 */}
          <div
            className="w-full sm:w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-md 
            hover:scale-105 transition-transform duration-300"
          >
            <h5 className="mb-2 text-2xl sm:text-3xl font-bold tracking-tight font-serif text-pink-700 leading-snug">
              Energy Channels
            </h5>
            <p className="text-gray-700 font-serif text-justify">
              There are three main energy channels (nadis) in your body – left,
              center, and right. They correspond to your nervous system and
              connect your chakras. All three work together to balance your
              inner energy and well-being.
            </p>
          </div>

          {/* Card 6 */}
          <div
            className="w-full sm:w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-md 
            hover:scale-105 transition-transform duration-300"
          >
            <h5 className="mb-2 text-2xl sm:text-3xl font-bold  font-serif tracking-tight text-pink-700 leading-snug">
              Chakras
            </h5>
            <p className="text-gray-700 font-serif text-justify">
              The Chakras (energy centers) control most aspects of our physical,
              mental, and spiritual lives. They are located at the sites of our
              main nerve plexuses. Difficulties in life can often be traced to
              imbalances in one or more chakras.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Section - Biography */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 ">
            <h1 className=" text-3xl font-semibold font-serif text-pink-700 leading-tight">
              It helps you achieve thoughtless awareness
            </h1>
            <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
              Through Sahaja Yoga, you can achieve a state of meditation known
              as thoughtless awareness. In this state, you experience and enjoy
              the present moment without any distractions from the past or
              future. Your consciousness works in flow with your inner energy
              (Kundalini). Being in this state makes you peaceful and balanced
              while improving your wellness and relationships over time.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col items-center">
            <img
              src={awarenss}
              alt="Shri Mataji Young"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Learn More Button */}
        <div className="flex justify-center">
          <Link to="/subtle">
            <button className="inline-flex items-center px-4 py-2 text-cyan-600 border border-cyan-600 rounded-lg font-medium hover:bg-cyan-600 hover:text-white transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sahajayoga;
