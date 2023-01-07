import React, { useState } from "react";
import logo from "../../assets/icons/netflix.png";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Ring from "../Navbar/Ring";
import { Link } from "react-router-dom";
import UserInfo from "../Navbar/UserInfo";
const activeUser = {
  id: 2,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqiJdk9eigV_PcJoKhZ95OZaLAkQ5YQ9z8bgIRkLp4EkIgZzHmb96nF3dbDqoNKPDv7k&usqp=CAU",
  name: "Ahmet",
};

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  function searchInputHandler() {
    setShowSearch(!showSearch);
  }

  return (
    <>
      <div className="flex justify-between  px-10 h-[75px] bg-[#181512]">
        {/* left */}
        <div className="flex items-center">
          <Link to="/">
            {" "}
            <img
              src={logo}
              alt="logo"
              className="w-[100px] m-1 cursor-pointer"
            />
          </Link>
          <h1 className="text-white m-1 cursor-pointer hover:scale-105">
            <Link to={"/browse"}>Home</Link>
          </h1>
          <h1 className="text-white m-1 cursor-pointer hover:scale-105">
            <Link to="/browse/tv-shows">TV Shows</Link>
          </h1>
          <h1 className="text-white m-1 cursor-pointer hover:scale-105">
            <Link to="/browse/movies">Movies</Link>
          </h1>
          <h1 className="text-white m-1 cursor-pointer hover:scale-105">
            <Link to="/latest">New & Popular</Link>
          </h1>
          <h1 className="text-white m-1 cursor-pointer hover:scale-105">
            <Link to="/browse/mylist">My List</Link>
          </h1>
          <h1 className="text-white m-1 cursor-pointer hover:scale-105">
            <Link to="/browse/original-audio">Browse by Languages</Link>
          </h1>
        </div>

        {/* right */}
        <div className="flex flex-row items-center space-x-4 ">
          {!showSearch && (
            <MagnifyingGlassIcon
              className="h-7 w-7 text-white cursor-pointer"
              onClick={searchInputHandler}
            />
          )}
          {showSearch && (
            <>
              <input
                className="bg-black/40 p-1"
                type="text"
                placeholder="Title,people,genres"
                onBlur={() => setShowSearch(false)}
              />
              <MagnifyingGlassIcon
                className="h-7 w-7 text-white cursor-pointer"
                onClick={() => {}}
              />
            </>
          )}
          <BellAlertIcon
            className="h-7 w-7 text-white cursor-pointer"
            onMouseOver={() => setShowMessages(true)}
            onMouseOut={() => setShowMessages(false)}
          />

          <div
            className="flex items-center space-x-1"
            onMouseOver={() => setShowUserInfo(true)}
            onMouseOut={() => setShowUserInfo(false)}
          >
            <img
              src={activeUser.image}
              alt="activeUser"
              className="h-6 w-7 rounded-lg cursor-pointer"
            />
            <div>
              <ChevronDownIcon className="h-6 w-6 hover:rotate-180 text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {showMessages && (
        <div className="relative" onMouseOver={() => setShowMessages(true)}>
          <div
            className="absolute right-[100px] top-[-30px]"
            onMouseOver={() => setShowMessages(true)}
            onMouseOut={() => setShowMessages(false)}
          >
            <div className="pt-4 absolute z-10 right-5">
              <Ring />
            </div>
          </div>
        </div>
      )}
      {showUserInfo && (
        <div className="relative" onMouseOver={() => setShowUserInfo(true)}>
          <div
            className="absolute right-[100px] top-[-30px]"
            onMouseOver={() => setShowUserInfo(true)}
            onMouseOut={() => setShowUserInfo(false)}
          >
            <div className="pt-4 absolute z-10 -right-14">
              <UserInfo />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
