import React from "react";
import FilmBanner from "../components/HomePage/FilmBanner";
import Footer from "../components/HomePage/Footer";
import Navbar from "../components/HomePage/Navbar";
import Row from "../components/HomePage/Row";
import { categories } from "../data";

function HomePage() {
  return (
    <div className=" bg-[#181512]">
      <Navbar />
      <FilmBanner />
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

export default HomePage;
