import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/netflix.png";
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import ProfileInfo from "./ProfileInfo";
function HelpNavbar() {
  const [profileInfo, setProfileInfo] = useState(false);
  function handleProfileInfo() {
    setProfileInfo(!profileInfo);
  }
  return (
    <>
      <div className="bg-black h-20v mt-0 ">
        <div className="mx-[400px] flex justify-between items-center">
          <Link to="/">
            {" "}
            <img
              src={logo}
              alt="logo"
              className="w-[100px] m-1 cursor-pointer"
            />
          </Link>
          <div
            className="flex space-x-3 cursor-pointer"
            onClick={handleProfileInfo}
          >
            <p className="text-white hover:underline">Yüksel</p>
            <AiFillCaretDown color="red" size={24} />
          </div>
        </div>
        <div className="flex flex-col space-y-3 items-center ">
          <h1 className="font-bold text-4xl text-white text-center">
            Help Center
          </h1>
          <div className="bg-white rounded-lg w-[500px] ">
            <div className="px-4 py-2 flex space-x-3">
              <FiSearch size={24} color="gray" />
              <input
                type="text"
                placeholder="What do you need help with?"
                className="outline-0"
              />
            </div>
          </div>
        </div>
      </div>
      {profileInfo && (
        <div className="relative">
          <ProfileInfo />
        </div>
      )}
    </>
  );
}

export default HelpNavbar;
