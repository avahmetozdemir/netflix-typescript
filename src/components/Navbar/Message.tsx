import React from "react";

function Message() {
  return (
    <div className="flex flex-row h-[100px] w-full border-b border-white cursor-pointer">
      <div className="flex flex-1/3 items-center justify-center">
        <img
          className="w-4/5 rounded-xl hover:scale-105 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5nl8C1Pf3VT4fuO4hGEG_6bBUVkTmRBbb4ubSxRjp9UdB6hC9SGJaHkMQc_LgNxcxiE&usqp=CAU"
          alt=""
        />
      </div>
      <p className="flex-2/3 text-white hover:scale-105">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam totam
      </p>
    </div>
  );
}

export default Message;
