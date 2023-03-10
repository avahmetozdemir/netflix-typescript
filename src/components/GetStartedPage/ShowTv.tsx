import React from "react";

function ShowTv() {
  return (
    <div className="bg-black border-b-8 border-gray-700 h-[400px]">
      <div className="px-[300px] py-[100px] flex justify-between">
        <div className="flex flex-col space-y-4 text-white w-[500px]">
          <h1 className="text-5xl font-bold">Enjoy on your TV</h1>
          <h3 className="text-xl font-semibold">
            Watch on smart TVs, Playstation, Xbox, Chorecast, Apple TV, Blu-ray
            players, and more.
          </h3>
        </div>
        <div className="">
          <img
            className="w-[400px]"
            src="https://cdn.webrazzi.com/uploads/2016/01/netflix-tv.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ShowTv;
