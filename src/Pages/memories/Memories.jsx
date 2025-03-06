import React from "react";
import a from "../../assets/a.jpg";
const imageData = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
];
const Memories = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-0 bg-red-50">
        {/* Full-width Image */}
        <img
          className="w-full h-auto object-cover"
          src={a}
          alt="Sahaja Yoga"
          loading="lazy"
        />
        <div className="bg-red-50">
          <div className="flex flex-wrap gap-2 justify-center">
            {imageData.map((src, index) => (
              <div key={index} className="w-1/2 p-1">
                <img
                  className="w-full h-auto rounded-lg"
                  src={src}
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Memories;
