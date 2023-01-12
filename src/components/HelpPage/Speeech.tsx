import React from "react";
import { BsFileText } from "react-icons/bs";
function Speeech() {
  return (
    <div className="px-[400px] py-8 bg-gray-100 border-b border-gray-400 ">
      <div className="flex flex-col space-y-2">
        <h1>
          Hi, <span>Yüksel</span>
        </h1>
        <h3>Recommended for you</h3>
      </div>
      <div className="flex space-x-3 items-center mt-2">
        <div className="w-[300px] rounded-md bg-white hover:underline hover:text-red-600 cursor-pointer">
          <div className="flex items-center space-x-2 p-2">
            <BsFileText color="black" size={24} />
            <h2 className="font-semibold text-black text-xl hover:text-red-600">
              How to keep your account secure
            </h2>
          </div>
        </div>
        <div className="w-[300px] rounded-md bg-white hover:underline hover:text-red-600 cursor-pointer">
          <div className="flex items-center space-x-2 p-2">
            <BsFileText color="black" size={24} />
            <h2 className="font-semibold text-black text-xl hover:text-red-600">
              Parental controls on Neflix
            </h2>
          </div>
        </div>
        <div className="w-[300px] rounded-md bg-white hover:underline hover:text-red-600 cursor-pointer">
          <div className="flex items-center space-x-2 p-2">
            <BsFileText color="black" size={24} />
            <h2 className="font-semibold text-black text-xl hover:text-red-600">
              How to change your plan
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speeech;
