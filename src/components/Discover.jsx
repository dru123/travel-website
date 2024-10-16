import React from "react";

const Discover = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <h1 className="text-4xl font-bold text-center">Discover</h1>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/safari_desert.jpg"
            alt=""
          />
          <div>
            <h2 className="font-bold">RAJASTHAN.</h2>
            <h1 className="text-2xl font-bold">The Beauty of Rajasthan.</h1>
          </div>
          <p className="text-sm">
            There’s something magical about exploring a new city—stepping onto
            unfamiliar streets, the air filled with possibilities. Every corner
            tells a story, every sunset offers a new perspective. Time seems to
            slow down, yet every second feels more precious than the last.
          </p>
          <p className="text-sm">
            Traveling isn't just about seeing places; it’s about feeling them.
            The energy of a bustling market, the quiet beauty of a hidden alley,
            the way the sky changes color as you move. Each moment is fleeting,
            but in the heart of a traveler, it stays forever
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h2 className="font-bold">DUBAI.</h2>
          <h1 className="font-bold text-2xl">Travelling is life.</h1>
          <p className="text-sm">
            Traveling isn't just about seeing places; it’s about feeling them.
            The energy of a bustling market, the quiet beauty of a hidden alley,
            the way the sky changes color as you move. Each moment is fleeting,
            but in the heart of a traveler, it stays forever
          </p>
          <img
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/desert.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[400px] my-10 relative">
        <img
          className="w-full h-full object-cover "
          src="images/image-8.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300">
            View Details
          </h1>
        </div>
      </div>

      <div className="my-20 flex justify-between items-center xl:h-[500px]">
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt=""
          />
        </div>
        <div className="xl:w-[500px] p-5 text-center space-y-5 sm:space-y-2">
          <h1 className="md:text-xl sm:text-sm">Step into Royalty.</h1>
          <h2 className="md:text-4xl sm:text-base">
            Explore the Splendor of Palaces.
          </h2>
          <p className="md:text-base sm:text-xs">
            The world is vast, yet time is not. Every journey you take is an
            invitation to live fully, to connect with new cultures, and to
            create memories that will never fade. So pack your bags, step into
            the unknown, and embrace the adventure. Because time will never come
            back, but the love for traveling will stay with you forever.
          </p>
          <button className="mt-5 px-5 py-2 border border-black hover:bg-gray-400 hover:duration-300">
            Book Now
          </button>
        </div>
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
