import React from "react";
import { FiChevronRight } from "react-icons/fi";
function BannerMain() {
  return (
    <div className="flex flex-col items-center mt-[150px] ">
      <div className="flex flex-col space-y-3 text-white text-center mb-5">
        <h1 className="font-bold text-6xl">Unlimited movies, TV</h1>
        <h1 className="font-bold text-6xl">shows, and more.</h1>
        <h3 className="font-medium text-3xl">
          Watch anywhere. Cancel anytime.
        </h3>
        <h3 className="font-xl text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
      </div>
      <div className="flex items-center">
        <div className="bg-white w-[400px] p-3">
          <input
            type="email"
            placeholder="Email address"
            className="outline-none w-full text-lg"
          />
        </div>
        <div className="bg-red-500  w-[220px] cursor-pointer">
          <div className="p-2 flex items-center space-x-2">
            <h3 className="text-white text-3xl font-medium">Get Started</h3>
            <FiChevronRight color="white" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerMain;
