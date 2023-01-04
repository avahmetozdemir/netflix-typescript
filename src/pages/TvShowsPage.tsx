import React, { useState } from "react";
import Footer from "../components/HomePage/Footer";
import Navbar from "../components/HomePage/Navbar";
import Row from "../components/HomePage/Row";
import BannerPage from "../components/TvShowsPage/BannerPage";
import SubNavbar from "../components/TvShowsPage/SubNavbar";
import { categories } from "../data";

function TvShowsPage() {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [showBannerPage, setShowBannerPage] = useState<boolean>(true);
  return (
    <div className="relative min-h-screen bg-[#181512]">
      <Navbar />
      <SubNavbar
        showSuggestion={showSuggestion}
        showBannerPage={showBannerPage}
        setShowBannerPage={setShowBannerPage}
        setShowSuggestion={setShowSuggestion}
      />

      {showBannerPage && (
        <div className="absolute w-full top-0 -z-40">
          <BannerPage />
        </div>
      )}
      {categories.map((category) => (
        <Row
          key={category.id}
          categoryName={category.categoryName}
          movies={category.films}
        />
      ))}
      <Footer />
    </div>
  );
}

export default TvShowsPage;
