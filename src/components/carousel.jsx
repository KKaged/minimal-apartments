import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full p-20">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-900 text-white rounded"
        onClick={handlePrev}
      >
        Prev
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
        className="w-8/12 mx-auto"
      />
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-900 text-white rounded"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
