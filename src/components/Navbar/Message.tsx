import React from "react";

function Message() {
  return (
    <div className="flex flex-row h-[100px] w-full border-b border-white">
      <img
        className="h-full flex-1 mr-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5nl8C1Pf3VT4fuO4hGEG_6bBUVkTmRBbb4ubSxRjp9UdB6hC9SGJaHkMQc_LgNxcxiE&usqp=CAU"
        alt=""
      />
      <p className="flex-1 text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam totam
      </p>
    </div>
  );
}

export default Message;
