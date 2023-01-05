import React from "react";
import { BsPencil } from "react-icons/bs";
function UserInfo() {
  return (
    <div className="bg-black/40 w-[200px] h-[300px] border-1 border-white ">
      <div className="flex flex-col border-b border-gray-300">
        <div className="flex px-2 mt-3 space-x-2 cursor-pointer hover:underline">
          <img
            src="https://nextluxury.com/wp-content/uploads/Homer-Simpson-e1648441168355.jpg"
            alt="Yüksel"
            className="w-10 h-10 rounded-lg"
          />
          <p className="text-white">Yüksel</p>
        </div>
        <div className="flex px-2 my-2 space-x-2 cursor-pointer hover:underline">
          <img
            src="https://64.media.tumblr.com/b29d66d276cd8070d29ff53df060ee4d/tumblr_nrwp8j6yzZ1rxw2uko8_1280.jpg"
            alt="Ebrar"
            className="w-10 h-10 rounded-lg"
          />
          <p className="text-white">Ebrar</p>
        </div>
      </div>
      <div>
        <div className="flex">
          <BsPencil size={24} color="gray" /> <span>Manage Profile</span>{" "}
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default UserInfo;
