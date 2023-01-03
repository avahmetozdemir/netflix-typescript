import React from "react";
import logo from "../../assets/icons/netflix.png";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
const activeUser = {
  id: 2,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqiJdk9eigV_PcJoKhZ95OZaLAkQ5YQ9z8bgIRkLp4EkIgZzHmb96nF3dbDqoNKPDv7k&usqp=CAU",
  name: "Ahmet",
};

function Navbar() {
  return (
    <div className="flex justify-between mx-10 h-[75px]">
      {/* left */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-[100px] m-1 cursor-pointer" />
        <h1 className="text-white m-1 cursor-pointer">Home</h1>
        <h1 className="text-white m-1 cursor-pointer">TV Shows</h1>
        <h1 className="text-white m-1 cursor-pointer">Movies</h1>
        <h1 className="text-white m-1 cursor-pointer">New & Popular</h1>
        <h1 className="text-white m-1 cursor-pointer">My List</h1>
        <h1 className="text-white m-1 cursor-pointer">Browse by Languages</h1>
      </div>

      {/* right */}
      <div className="flex flex-row items-center space-x-4 ">
        <MagnifyingGlassIcon className="h-7 w-7 text-white cursor-pointer" />
        <BellAlertIcon className="h-7 w-7 text-white cursor-pointer" />
        <div className="flex items-center space-x-1">
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
  );
}

export default Navbar;
