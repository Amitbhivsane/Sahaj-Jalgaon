import React, { useEffect } from "react";
import subtle from "../../assets/subtle.jpg";
import subt2 from "../../assets/subt2.jpg";
import moladhar from "../../assets/moladhar.jpg";
import swadh from "../../assets/swadh.jpg";
import nabhi from "../../assets/nabhi.jpg";
import voids from "../../assets/voids.jpg";
import anahad from "../../assets/anahad.jpg";
import vishu from "../../assets/vishu.jpg";
import agya from "../../assets/agya.jpg";
import sahasrar from "../../assets/sahasrar.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Subtle = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 text-black flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold font-serif text-pink-700  ml-4 mt-10 ">
              {t("THE SUBTLE SYSTEM")}
            </h1>

            <p className="ml-4 mt-10 text-base  lg:text-lg xl:text-xl">
              {t(
                "The subtle system is the network of energy centers (chakras) and channels (nadis) along the central nervous system through which our Kundalini flows. Sahaja Yoga helps you learn to feel, understand and ultimately use your own subtle system to achieve Self-Realization."
              )}
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center ">
            <div className="flex flex-col items-center space-y-6 p-4">
              {/* Image Section */}
              <img
                src={subtle}
                alt="Sample Image"
                className="w-full max-w-lg  bg-gray-100"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center bg-gray-100 mt-10">
          <img
            src={subt2}
            alt="Sample Image"
            className="w-full max-w-lg  bg-gray-100"
          />
        </div> */}
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold font-serif text-pink-700 ml-14 mt-10">
            {t("CHAKRAS")}
          </h1>
          <p className="ml-10 mt-10 text-base  lg:text-lg xl:text-xl">
            {t(
              "There are seven main chakras (energy centers) located along the spine. They are the fulcrums that control most aspects of our physical, mental and spiritual lives. Chakras are located at the sites of our main nerve plexuses. Often difficulties in life can be traced to imbalances or blockages in one or more chakras. Chakras are connected by nadis (or channels). When the Kundalini rises and nourishes the chakras, our body automatically becomes dynamic, creative and integrated"
            )}
          </p>
        </div>
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 text-black flex flex-col ">
            <h1 className="text-3xl font-bold font-serif text-pink-700 ml-14 mt-10">
              {t("MOOLADHARA – INNOCENCE AND WISDOM")}
            </h1>

            <p className="ml-14 mt-10 text-base font-serif text-gray-700 lg:text-lg xl:text-xl">
              {t(
                "The first chakra, Mooladhara, forms the foundation of your entire subtle energy system. It represents eternal and indestructible qualities within you. These qualities only manifest to their fullest potential when your Kundalini has been awakened.You know that innocence that a young child has? How they live in the moment, having wisdom and an innate dignity untainted by the influences of society? These child-like qualities are the essence of the Mooladhara. Balancing your Mooladhara will help you rediscover these qualities that we often lose as we get older. This chakra also gives us purpose and direction, as well as balance and harmony with nature."
              )}
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center ">
            <div className="flex flex-col items-center space-y-6 p-4 ">
              {/* Image Section */}
              <img
                src={moladhar}
                alt="Sample Image"
                className="w-full max-w-lg  bg-gray-100 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 text-black flex flex-col ">
            <h1 className="text-3xl font-bold font-serif text-pink-700 ml-14 mt-10">
              {t("SWADISTHAN – CREATIVITY, SPONTANEITY")}
            </h1>
            <p className="ml-14 mt-10 text-base font-serif text-gray-700 lg:text-lg xl:text-xl">
              {t(
                "The second chakra, the Swadisthan, supplies energy for the grey cells in the brain. It is the center of action. Every time you think and act, you use the energy of the Swadhisthan. If you do too much (physically or mentally), it can get out of balance."
              )}
            </p>

            <p className="ml-14 mt-2 text-base font-serif text-gray-700 lg:text-lg xl:text-xl">
              {t(
                "The Swadisthan stimulates your creative instincts. Its qualities include idea generation, the appreciation of beauty, keen intellectual perception, pure knowledge and undistracted attention which is vital to achieving the thoughtless state in meditation."
              )}
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center ">
            <div className="flex flex-col items-center space-y-6 p-4 ">
              {/* Image Section */}
              <img
                src={swadh}
                alt="Sample Image"
                className="w-full max-w-lg  bg-gray-100 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 text-black flex flex-col ">
            <h1 className="text-3xl font-bold font-serif text-pink-700 ml-14 mt-10">
              {t("NABHI–PEACE, CONTENTMENT")}
            </h1>

            <p className="ml-14 mt-10 text-base font-serif text-gray-700 lg:text-lg xl:text-xl">
              {t(
                "The third energy center, Nabhi, is responsible for digestive processes and metabolism. It works with the Swadisthan and Void as an integrated unit ensuring a harmonious physiologic environment in our body by controlling the abdominal organs. This chakra is intimately associated with your worldly desires and their satisfaction. A harmonious and balanced family life. Career success and status. Financial well-being. A balanced Nabhi represents your contentment and satisfaction with these material needs, and the foundation from which you can evolve to achieve higher goals. Other qualities of the Nabhi include nurturing, righteousness, peace and joy"
              )}
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center ">
            <div className="flex flex-col items-center space-y-6 p-4 ">
              {/* Image Section */}
              <img
                src={nabhi}
                alt="Sample Image"
                className="w-full max-w-lg  bg-gray-100 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 text-black flex flex-col ">
            <h1 className="text-3xl font-bold font-serif text-pink-700 ml-14 mt-10 ">
              {t("VOID - SELF-DISCIPLINE, SELF-GUIDANCE")}
            </h1>

            <p className="ml-14 mt-10 text-base font-serif text-gray-700  lg:text-lg xl:text-xl">
              {t(
                "The Void represents the ocean of unenlightened awareness within an individual’s knowledge, the gap in the central channel. It is filled with true knowledge as you receive your Kundalini awakening. The qualities of the Void include balance, righteousness, a sense of personal dignity, self-discipline, decisiveness, patience, thirst for truth and knowledge. Ultimately, the Void is associated with the principle of the guru: your own ability to guide yourself and others in spiritual evolution. The Void, along with your Nabhi and Swadisthan chakras, represent an integrated group. Together, they dictate the course of your evolution from your creation to your ultimate awareness of spirituality and your journey to Self-Realization."
              )}
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center ">
            <div className="flex flex-col items-center space-y-6 p-4 ">
              {/* Image Section */}
              <img
                src={voids}
                alt="Sample Image"
                className="w-full max-w-lg  bg-gray-100 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 text-black flex flex-col ">
            <h1 className="text-3xl font-bold font-serif text-pink-700 ml-14 mt-10">
              {t("ANAHAT (HEART) – LOVE, COMPASSION, SECURITY")}
            </h1>

            <p className="ml-14 mt-10 text-base font-serif text-gray-700 lg:text-lg xl:text-xl">
              {t(
                "The fundamental quality of the Heart chakra is unconditional love – a love that is selfless and unattached. It is not necessarily the love for a partner, child or family. It can be love for any human being you interact with, perhaps even a stranger, that fills a few moments with joy. If you haven’t experienced that, it is not unusual – but it is a truly amazing feeling that you can experience all the time when your Heart chakra is in balance. The Heart chakra also opens up compassion, gracious behavior, joy and confidence. It also removes your fears and establishes a sense of security, as well as positive paternal and maternal relationships. A balanced Heart chakra first gets you to love yourself. Physically, the Heart chakra contributes to the health of your circulatory and respiratory systems. Physical problems in these systems can be improved through correcting an imbalance in the heart chakra. This chakra is also responsible for the creation and nourishment of antibodies that help us fight disease."
              )}
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center ">
            <div className="flex flex-col items-center space-y-6 p-4 ">
              {/* Image Section */}
              <img
                src={anahad}
                alt="Sample Image"
                className="w-full max-w-lg  bg-gray-100 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 text-black flex flex-col ">
            <h1 className="text-3xl font-bold font-serif text-pink-700 ml-14 mt-10">
              {t("VISHUDDHI – COMMUNICATION, DIPLOMACY, COLLECTIVENESS")}
            </h1>

            <p className="ml-14 mt-10 text-base font-serif text-gray-700  lg:text-lg xl:text-xl">
              {t(
                "The Vishuddhi chakra controls your communication skills. If you know somebody who can say a few words that make everybody feel better in a hopeless situation, they probably have a balanced Vishuddhi. Or if you can defuse a tense argument while gaining respect from the opposing parties, you might have the diplomatic skills that are hallmarks of one. A person with a healthy Vishuddhi has a good sense of humor and is polite and pleasant. This energy center is essential to maintaining positive and healthy relationships with others."
              )}
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center ">
            <div className="flex flex-col items-center space-y-6 p-4 ">
              {/* Image Section */}
              <img
                src={vishu}
                alt="Sample Image"
                className="w-full max-w-lg  bg-gray-100 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 text-black flex flex-col ">
            <h1 className="text-3xl font-bold font-serif text-pink-700 ml-14 mt-10 ">
              {t("AGNYA – FORGIVENESS, MENTAL SILENCE")}
            </h1>

            <p className="ml-14 mt-10 text-base font-serif text-gray-700  lg:text-lg xl:text-xl">
              {t(
                "The essence of this chakra is forgiveness. When we don’t forgive, we hurt ourselves – by getting this chakra out of balance. A balanced Agnya chakra allows you to achieve thoughtless awareness, or mental silence, that is so essential to a rejuvenating meditation. The Agnya, sometimes referred to as the ‘third eye’, also keeps the ego (thinking, planning) and superego (memories, conditionings and emotions) in balance. It is the gateway to the Sahasrara chakra, which symbolizes the purest spiritual realm of existence."
              )}
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center ">
            <div className="flex flex-col items-center space-y-6 p-4 ">
              {/* Image Section */}
              <img
                src={agya}
                alt="Sample Image"
                className="w-full max-w-lg  bg-gray-100 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 text-black flex flex-col ">
            <h1 className="text-3xl font-bold font-serif text-pink-700 ml-14 mt-10">
              {t("SAHASRARA - INTEGRATION")}
            </h1>

            <p className="ml-14 mt-10 text-base  font-serif text-gray-700 lg:text-lg xl:text-xl">
              {t(
                "The primary quality of the Sahasrara chakra is integration and a sense of oneness with all elements of the universe. It is through Sahasrara that we experience the connection to the all-pervading spiritual energy, to the absolute truth. Sahasrara represents our ultimate destination. We cannot fully understand the meaning and purpose of our lives until we are connected to the power that created us."
              )}
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 p-8 flex justify-center items-center ">
            <div className="flex flex-col items-center space-y-6 p-4 ">
              {/* Image Section */}
              <img
                src={sahasrar}
                alt="Sample Image"
                className="w-full max-w-lg  bg-gray-100 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center p-7 bg-gray-100">
          <Link to="/">
            <button className="inline-flex items-center px-4 py-2 text-cyan-600 border border-cyan-600 rounded-lg font-medium hover:bg-cyan-600 hover:text-white transition duration-300">
              Self Realization Link
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Subtle;
