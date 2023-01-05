import React from "react";
import Filters from "../components/BrowseByLanguagePage/Filters";
import Movies from "../components/BrowseByLanguagePage/Movies";
import Footer from "../components/HomePage/Footer";
import Navbar from "../components/UI/Navbar";

function BrowseByLanguagePage() {
  return (
    <div className="bg-[#181512] min-h-screen">
      <Navbar />
      <Filters />
      <Movies />
      <Footer />
    </div>
  );
}

export default BrowseByLanguagePage;
