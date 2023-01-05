import React from "react";
import Navbar from "../components/HomePage/Navbar";

function NotFoundPage() {
  return (
    <div className=" min-h-screen bg-[#181512]">
      <Navbar />
      <div className="mx-12 mt-10 ">
        <h1 className="text-white text-3xl">Not Found Page</h1>
      </div>
    </div>
  );
}

export default NotFoundPage;
