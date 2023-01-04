import React, { useState } from "react";
import Navbar from "../components/HomePage/Navbar";
import BannerPage from "../components/TvShowsPage/BannerPage";
import SubNavbar from "../components/TvShowsPage/SubNavbar";

function TvShowsPage() {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [showBannerPage, setShowBannerPage] = useState<boolean>(true);
  return (
    <div className="relative min-h-screen bg-[#181512]">
      <div className="absolute z-10 w-full">
        <Navbar />
        <SubNavbar
          showSuggestion={showSuggestion}
          showBannerPage={showBannerPage}
          setShowBannerPage={setShowBannerPage}
          setShowSuggestion={setShowSuggestion}
        />
      </div>
      {showBannerPage && (
        <div className="absolute w-full top-0  ">
          <BannerPage />
        </div>
      )}
    </div>
  );
}

export default TvShowsPage;
