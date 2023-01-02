import React from "react";

interface UserProps {
  name: string;
  imgUrl: string;
}

function UserLogin({ name, imgUrl }: UserProps) {
  return (
    <div className="w-[150px] cursor-pointer m-3 ">
      <img
        src={imgUrl}
        alt={name}
        className="w-[150px] h-[150px] mb-3 rounded-xl border-4 border-[#181512] hover:border-white"
      />
      <p className="text-white text-center text-lg">{name}</p>
    </div>
  );
}

export default UserLogin;
