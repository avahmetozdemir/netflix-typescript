import React from "react";
import BannerMain from "./BannerMain";
import NavbarForBanner from "./NavbarForBanner";

function Banner() {
  return (
    <div className="w-full relative  ">
      <img
        className="w-full max-h-[750px] object-fit "
        src="https://veneportal.com/noticias/wp-content/uploads/sites/2/2021/03/Netflix-d7bf70ec-750x430.jpg"
        alt=""
      />
      <div className="absolute top-0 bg-black/40 w-full h-[750px] border-b-[8px] border-gray-700 ">
        <NavbarForBanner />
        <BannerMain />
      </div>
    </div>
  );
}

export default Banner;
