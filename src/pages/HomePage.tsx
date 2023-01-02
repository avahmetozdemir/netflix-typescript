import React from "react";
import FilmBanner from "../components/HomePage/FilmBanner";
import Navbar from "../components/HomePage/Navbar";

function HomePage() {
  return (
    <div className="bg-[#181512]">
      <Navbar />
      <FilmBanner />
    </div>
  );
}

export default HomePage;
