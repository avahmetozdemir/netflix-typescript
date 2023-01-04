import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { HiSquares2X2 } from "react-icons/hi2";
import { MdOutlineSubject } from "react-icons/md";

interface SubNavbarProps {
  showBannerPage: boolean;
  setShowBannerPage: (boolean: boolean) => void;
  showSuggestion: boolean;
  setShowSuggestion: (boolean: boolean) => void;
}

function SubNavbar({
  setShowSuggestion,
  setShowBannerPage,
  showBannerPage,
  showSuggestion,
}: SubNavbarProps) {
  function genresHandler() {}
  function bannerPageHandler() {
    setShowSuggestion(false);
    setShowBannerPage(true);
  }
  function suggestionPageHandler() {
    setShowSuggestion(true);
    setShowBannerPage(false);
  }
  return (
    <div className="flex justify-between mx-10 mt-2">
      {/* left */}
      <div className="flex space-x-10 items-center">
        <h1 className="text-3xl text-white">TV Shows</h1>
        <div
          className=" cursor-pointer border border-white w-[150px] h-[30px] bg-black "
          onClick={genresHandler}
        >
          <div className="flex items-center justify-between mx-2 p-1">
            <p className="text-white text-sm">Genres</p>{" "}
            <AiFillCaretDown color="white" size={12} />{" "}
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex">
        <div
          className="flex items-center justify-center border border-white h-[30px] w-[50px] cursor-pointer"
          onClick={bannerPageHandler}
        >
          <MdOutlineSubject color="white" size={24} />
        </div>

        <div
          className={`flex items-center space-x-5 border border-white h-[30px] ${
            !showSuggestion && "w-[50px] justify-center"
          } cursor-pointer`}
          onClick={suggestionPageHandler}
        >
          <HiSquares2X2 color="white" size={24} />
          {showSuggestion && (
            <div className="flex items-center justify-between">
              <p className="text-white">Suggestions For You</p>
              <AiFillCaretDown color="white" size={12} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubNavbar;
