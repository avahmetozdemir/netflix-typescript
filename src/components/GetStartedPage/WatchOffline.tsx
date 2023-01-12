import React from "react";

function WatchOffline() {
  return (
    <div className="bg-black border-b-8 border-gray-700 h-[400px]">
      <div className="px-[300px] py-[100px] flex justify-between">
        <div className="">
          <img
            className="w-[400px]"
            src="https://i0.wp.com/wonderoftech.com/wp-content/uploads/2016/11/Netflix-Download-Videos.jpg?fit=600%2C392&ssl=1"
            alt=""
          />
        </div>

        <div className="flex flex-col space-y-4 text-white w-[500px]">
          <h1 className="text-5xl font-bold">
            Download your shows to watch offline.
          </h1>
          <h3 className="text-xl font-semibold">
            Save your favorites easily and always have something to watch.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WatchOffline;
