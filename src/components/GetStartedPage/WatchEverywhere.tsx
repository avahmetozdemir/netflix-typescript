import React from "react";

function WatchEverywhere() {
  return (
    <div className="bg-black border-b-8 border-gray-700 h-[400px]">
      <div className="px-[300px] py-[100px] flex justify-between">
        <div className="flex flex-col space-y-4 text-white w-[500px]">
          <h1 className="text-5xl font-bold">Watch everywhere.</h1>
          <h3 className="text-xl font-semibold">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h3>
        </div>
        <div className="">
          <img
            className="w-[400px]"
            src="https://images.ctfassets.net/4cd45et68cgf/5y7i4snzpqkr2oHRCRAkN4/c144749aa0df745e43367744af149f66/Android_Collage_1920x1080__UCAN_En.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WatchEverywhere;
