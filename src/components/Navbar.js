import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-2xl font-bold text-white z-20">Experiences</h1>
      <HiMenuAlt3
        onClick={handleNav}
        className="z-20 text-white cursor-pointer"
        size={25}
      />
      <div
        className={
          nav
            ? "fixed ease-in duration-300 text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col w-full h-full justify-center items-center">
          <li className="font-bold text-3xl py-8">Home</li>
          <li className="font-bold text-3xl py-8">Destinations</li>
          <li className="font-bold text-3xl py-8">Resrvations</li>
          <li className="font-bold text-3xl py-8">Amenities</li>
          <li className="font-bold text-3xl py-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
