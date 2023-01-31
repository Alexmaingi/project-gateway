import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "sushi",
    },
    {
      url: "https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "lobster",
    },
    {
      url: "https://images.pexels.com/photos/1150447/pexels-photo-1150447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "pasta",
    },
    {
      url: "https://images.pexels.com/photos/2098134/pexels-photo-2098134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "salmon",
    },
  ];

  const [curentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    const isFirstSlide = curentIndex === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : curentIndex - 1;
    setCurrentIndex(newSlide);
  };
  const handleNextSlide = () => {
    const isLastSlide = curentIndex === slides.length - 1;
    const newSlide = isLastSlide ? 0 : curentIndex + 1;
    setCurrentIndex(newSlide);
  };

  return (
    <div className="max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full bg-cover bg-center duration-500 rounded-2xl"
        style={{ backgroundImage: `url(${slides[curentIndex].url})` }}
      ></div>
      <div className="absolute top-[50%] translate-x-0 translate-y-[50%] left-0 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={handlePrevSlide} size={30} />
      </div>
      <div className="absolute top-[50%] translate-x-0 translate-y-[50%] right-0 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={handleNextSlide} size={30} />
      </div>
    </div>
  );
};

export default ImageSlider;
