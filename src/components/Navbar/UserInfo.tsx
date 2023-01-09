import React from "react";
import { BsPencil } from "react-icons/bs";
import { BiHomeSmile } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineHelpOutline } from "react-icons/md";
import { Link } from "react-router-dom";
function UserInfo() {
  return (
    <div className="bg-black/40 w-[200px] h-[300px] border-2 border-white ">
      <div className="flex flex-col border-b border-gray-300">
        <div className="flex px-2 mt-3 space-x-2 cursor-pointer hover:underline">
          <img
            src="https://nextluxury.com/wp-content/uploads/Homer-Simpson-e1648441168355.jpg"
            alt="Yüksel"
            className="w-8 h-10 rounded-lg"
          />
          <p className="text-white">Yüksel</p>
        </div>
        <div className="flex px-2 my-2 space-x-2 cursor-pointer hover:underline">
          <img
            src="https://64.media.tumblr.com/b29d66d276cd8070d29ff53df060ee4d/tumblr_nrwp8j6yzZ1rxw2uko8_1280.jpg"
            alt="Ebrar"
            className="w-8 h-10 rounded-lg"
          />
          <p className="text-white">Ebrar</p>
        </div>
      </div>
      <div className="border-b border-gray-300">
        <div className="flex p-2 space-x-3 cursor-pointer">
          <BsPencil size={24} color="#7A7479" />{" "}
          <span className="text-white">
            <Link to="/profiles/manage">Manage Profile</Link>
          </span>{" "}
        </div>
        <div className="flex p-2 space-x-3 cursor-pointer">
          <BiHomeSmile size={24} color="#7A7479" />{" "}
          <span className="text-white">Transfer Profile</span>{" "}
        </div>
        <div className="flex p-2 space-x-3 cursor-pointer">
          <VscAccount size={24} color="#7A7479" />{" "}
          <span className="text-white">
            <Link to="/YourAccount">Account</Link>
          </span>{" "}
        </div>
        <div className="flex p-2 space-x-3 cursor-pointer">
          <MdOutlineHelpOutline size={24} color="#7A7479" />{" "}
          <span className="text-white">Help Center</span>{" "}
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 cursor-pointer ">
        <h1 className="text-white text-center text-[15px]">
          Sign out of Netflix
        </h1>
      </div>
    </div>
  );
}

export default UserInfo;
