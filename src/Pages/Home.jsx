import React from "react";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <div className="bg-red-50 w-full h-auto">
      <Hero />

      <section className="container mx-auto text-center px-6 py-12">
        <h2 className="text-xl font-bold font-serif text-pink-700 leading-tight md:text-5xl lg:text-6xl">
          Experience Sahaja Yoga Meditation
        </h2>
        <p className="text-xl  md:text-2xl text-gray-800  font-serif leading-relaxed max-w-3xl mx-auto p-4 md:p-6">
          The time has come for all of you to get your self-realisation, by
          which your attention becomes enlightened, your health gets completely
          all right, your mental processes are sensible, but above all, you
          stand in your present.
        </p>
        <span className="text-cyan-700 text-xl font-semibold  font-serif block mt-4">
          H.H. Shri Mataji Nirmala Devi, 29.09.1994, Los Angeles, USA
        </span>

        {/* Video Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <iframe
            className="w-full md:w-1/2 max-w-lg rounded-lg shadow-lg"
            height="350"
            src="https://www.youtube.com/embed/3395oxkxrxg"
            title="Shri Mataji Self Realization (Kundalini Atma) Kolkata West Bengal 1986 (Calcutta) Sahaja Yoga Hindi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full md:w-1/2 max-w-lg rounded-lg shadow-lg"
            height="350"
            src="https://www.youtube.com/embed/gEXbMZ8CoQU"
            title="Sahaja Yoga - Self-Realization"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Self-Realization Guide */}
        <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg text-gray-800">
          <p className="text-lg md:text-xl leading-relaxed font-serif">
            You can receive your{" "}
            <span className="font-bold text-cyan-600">Self Realisation</span>{" "}
            (connection with your Self) while sitting in front of your computer.
            The only condition is your{" "}
            <span className="text-cyan-600 font-bold">sincere desire</span> to
            have it. During the experience, keep your{" "}
            <span className="font-bold text-cyan-600">left hand</span> palm
            upwards on your lap and place the{" "}
            <span className="font-bold text-cyan-600">right palm</span> on
            various parts of the body on your left side. Keep your{" "}
            <span className="text-cyan-600 font-bold ">eyes closed</span> for
            better focus. Taking off your shoes may help, as{" "}
            <span className="font-bold text-cyan-600">Mother Earth</span>{" "}
            absorbs negativity through our feet.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
