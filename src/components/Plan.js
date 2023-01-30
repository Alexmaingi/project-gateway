import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className=" row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/358358/pexels-photo-358358.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/279574/pexels-photo-279574.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/12516844/pexels-photo-12516844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="row-span-4 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          tempore.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
          voluptatem placeat optio totam, praesentium laudantium obcaecati!
          Voluptatem id quaerat sint perspiciatis. Suscipit, labore nisi et
          omnis totam quisquam sapiente!
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn more
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
