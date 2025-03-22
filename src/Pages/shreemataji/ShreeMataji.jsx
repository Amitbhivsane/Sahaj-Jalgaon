import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import a from "../../assets/a.jpg";
import shrimataji_young from "../../assets/shrimataji_young.jpg";
import shriMataj from "../../assets/mataji/shriMataj.png";
import { useTranslation } from "react-i18next";

const ShreeMataji = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/sahaja-yoga");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-red-50">
      {/* Header Image */}
      <div className="w-full">
        <img className="h-auto w-full" src={shriMataj} alt="Shri Mataji" />
      </div>

      {/* Title Section */}
      <div className="text-center py-8 px-6">
        <h1 className="text-3xl sm:text-5xl font-semibold font-serif text-pink-700 uppercase">
          {t("H.H. Shri Mataji Nirmala Devi")}
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-0 w-full max-w-7xl">
        {/* Left Section - Biography */}
        <div className="w-full md:w-1/2 p-4 md:p-6 bg-red-50 ml-4 mr-0">
          <h2 className="text-3xl font-semibold font-serif text-pink-700 ">
            {t("Birth and Childhood")}
          </h2>
          <h6 className="text-xl font-bold mt-2 text-cyan-700">
            {t("March 21, 1923")}
          </h6>

          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            {t(
              "Shri Mataji Nirmala Devi was born on March 21, 1923, into the Salve family in Chhindwara, India. Her parents, Prasad and Cornelia Salve, were direct descendants of the royal Shalivahana Dynasty. Seeing the brilliance of this child, they named her Nirmala, meaning “immaculate.”"
            )}
          </p>
          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            {t(
              "Shri Mataji Nirmala Devi, who was born with complete Self-Realization. Her parents played a key role in India’s Liberation Movement. Her father, a close associate of Mahatma Gandhi, helped draft India’s first constitution."
            )}
          </p>

          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            {t(
              "Her mother was the first woman in India to receive an Honors Degree in Mathematics."
            )}
          </p>
          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            {t(
              "Shri Mataji’s involvement in the freedom struggle is extremely remarkable. She was very courageous and played a daring role as a youth leader of this campaign. In the 1942 Quit India Movement announced by Gandhi, she was even arrested and put in jail along with other freedom fighters for actively participating in this movement."
            )}
          </p>

          {/* Read More Button */}
          {/* <div className="mt-6">
            <Link to="https://shrimataji.org/">
              <button
                className="px-5 py-2 text-gray-800 border border-gray-600 rounded-lg font-medium 
                           hover:bg-cyan-600 hover:text-white transition duration-300 focus:ring-2 focus:ring-cyan-400"
              >
                Read More
              </button>
            </Link>
          </div> */}
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-6">
          <img
            src={shrimataji_young}
            alt="Shri Mataji Young"
            className="w-full md:w-4/5 lg:w-auto lg:h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <div className="bg-pink-50 w-full max-w-7xl min-h-screen flex items-start justify-start p-6 ml-4">
        <div className="max-w-full ml-1 ">
          <h1 className="text-3xl font-semibold font-serif text-pink-700 ">
            {t("Education of Shri Mataji Nirmala Devi")}
          </h1>
          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            {t(
              "Shri Mataji was born with a complete understanding of the human nervous system and its energetic counterparts. In order to become acquainted with the scientific vocabulary attached to these subjects, she studied medicine and psychology at the Christian Medical College in Lahore."
            )}
          </p>
          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            {t(
              "Her early education was influenced by Mahatma Gandhi, under whom she spent time during India's freedom movement. She learned values of compassion, non-violence, and self-discipline."
            )}
          </p>

          <h1 className=" mt-4 text-3xl font-semibold font-serif text-pink-700 ">
            {t("Awards and Recognitions")}
          </h1>
          <p className="mt-4">
            <strong className="text-lg font-semibold font-serif text-cyan-700">
              {t("United Nations Recognition (1989 & 1990)")}
            </strong>{" "}
            –
            <span className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
              {t(
                "She was invited by the United Nations to speak on world peace and spirituality."
              )}
            </span>
          </p>
          <p className="mt-2">
            <strong className="text-lg font-semibold font-serif text-cyan-700">
              {t("Italy’s Knight Commander Award (1986)")}
            </strong>{" "}
            –{" "}
            <span className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
              {t(
                "The Italian government honored her with the title 'Knight Commander of the Order of Merit' for her humanitarian work."
              )}
            </span>
          </p>
          <p className="mt-2">
            <strong className="text-lg font-semibold font-serif text-cyan-700">
              {t("2001 Nobel Peace Prize Nominee")}
            </strong>{" "}
            –{" "}
            <span className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
              {t(
                "She was nominated for the Nobel Peace Prize for her efforts in spreading peace and self-realization."
              )}
            </span>
          </p>
          <p className="mt-2">
            <strong className="text-lg font-semibold font-serif text-cyan-700">
              {t("Honorary Citizenship in Multiple Countries")}
            </strong>{" "}
            –{" "}
            <span className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
              {" "}
              {t(
                "Many cities in Italy, Canada, and the United States awarded her honorary citizenship."
              )}
            </span>
          </p>
          <p className="mt-2">
            <stron className="text-lg font-semibold font-serif text-cyan-700" g>
              {t("Indian Government Recognition")}
            </stron>{" "}
            –{" "}
            <span className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
              {t(
                "Although she remained away from political influence, her contributions to spiritual growth were widely acknowledged in India."
              )}
            </span>
          </p>
          <p className="mt-2">
            <strong className="text-lg font-semibold font-serif text-cyan-700">
              {t("Recognition from Russia & Other Eastern European Nations")}
            </strong>{" "}
            –{" "}
            <span className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
              {t(
                "She was highly respected in Russia, Ukraine, and other former Soviet countries, where Sahaja Yoga became an official part of medical and educational institutions."
              )}
            </span>
          </p>

          <h1 className="mt-4 text-3xl font-semibold font-serif text-pink-700 ">
            {t("Sahaja Yoga")}
          </h1>
          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            {t(
              "Sahaja Yoga, established by Shri Mataji Nirmala Devi on May 5, 1970, is a profound meditation technique that facilitates spontaneous self-realization through the awakening of Kundalini energy. It fosters inner peace, harmony, and spiritual evolution without relying on rituals or external influences."
            )}
          </p>
          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            {t(
              "Shri Mataji tirelessly traveled across more than 100 countries, spreading the message of Sahaja Yoga as a path to universal peace and self-awareness. She addressed international organizations, including the United Nations, and received global recognition for her humanitarian work."
            )}
          </p>

          <p className="mt-4 text-lg font-serif leading-relaxed text-gray-800">
            {t(
              "Sahaja Yoga is now practiced globally, with meditation centers, workshops, and digital platforms enabling millions to achieve mental clarity, emotional balance, and stress reduction. It has evolved into an international movement, bringing people together across cultures through inner transformation."
            )}
          </p>

          <div className="flex items-center justify-center  text-center mt-5">
            <div>
              <h2 className="mt-4 text-3xl font-semibold font-serif text-pink-700">
                {t(
                  "When you are peaceful within, the whole world becomes peaceful."
                )}
              </h2>
              <p className="mt-2 text-2xl font-medium text-gray-700">
                – {t("Shri Mataji Nirmala Devi")}
              </p>
              {/* Read More Button */}
              <div className="mt-6">
                <button
                  onClick={handleReadMore}
                  className="px-5 py-2 text-gray-800 border border-gray-600 rounded-lg font-medium 
            hover:bg-cyan-600 hover:text-white transition duration-300 focus:ring-2 focus:ring-cyan-400"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShreeMataji;
