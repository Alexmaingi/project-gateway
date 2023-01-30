import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="Hero"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] absolute p-4">
          <p>All Inclusives</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Gateway
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl text-xl py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nulla accusamus voluptatum illum commodi laboriosam cum beatae ea
            totam quas.
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
