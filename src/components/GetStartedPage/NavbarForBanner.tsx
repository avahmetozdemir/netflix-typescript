import React from "react";
import logo from "../../assets/icons/netflix.png";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
function NavbarForBanner() {
  return (
    <div className="flex w-[1806px] h-[100px] justify-between px-10 pt-5 items-center">
      <img src={logo} alt="" className="w-[150px]" />
      <div className="flex space-x-4">
        <div className="border border-white flex  bg-black/40 items-center">
          <div className=" bg-black/40 flex items-center justify-center p-2">
            <TbWorld size={20} color="white" className="w-full h-full" />
          </div>
          <select
            name="language"
            className=" p-2 bg-black/40 text-white border-none outline-none"
          >
            <option value="english">English</option>
            <option value="turkish">Türkçe</option>
          </select>
        </div>
        <div className="bg-red-500 rounded-md w-[80px] flex items-center justify-center cursor-pointer">
          <h3 className="text-white font-semibold ">
            <Link to="/tr-en/login">Sign In</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NavbarForBanner;
