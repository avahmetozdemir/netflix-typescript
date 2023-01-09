import React from "react";
import { BiChevronRight } from "react-icons/bi";
function ProfileInfo() {
  return (
    <div className="absolute right-[400px] top-[-130px] bg-gray-100 rounded-lg ">
      <div className="flex flex-col px-3 py-5">
        <div className="flex flex-row space-x-1 cursor-pointer">
          <p className="text-black font-sm">Account</p>
          <BiChevronRight size={24} color="red" />
        </div>
        <div className="flex flex-row space-x-1 cursor-pointer">
          <p className="text-black font-sm">Sign out of Netflix</p>
          <BiChevronRight size={24} color="red" />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
