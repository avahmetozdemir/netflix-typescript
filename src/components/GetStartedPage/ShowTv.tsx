import React from "react";

function ShowTv() {
  return (
    <div className="bg-black border-b-8 border-gray-500">
      <div className="px-[100px] flex justify-between">
        <div className="flex flex-col space-y-4 text-white">
          <h1 className="text-5xl font-bold">Enjoy on your TV</h1>
          <h3 className="text-xl font-semibold">
            Watch on smart TVs, Playstation, Xbox, Chorecast, Apple TV, Blu-ray
            players, and more.
          </h3>
        </div>
        <div>
          <h1>TV in here </h1>
        </div>
      </div>
    </div>
  );
}

export default ShowTv;
