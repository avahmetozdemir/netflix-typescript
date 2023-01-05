import React from "react";
import Message from "./Message";

function Ring() {
  return (
    <div className="bg-black/40 w-[400px] h-[600px] border-1 border-white overflow-x-scroll scrollbar-hide">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Ring;
