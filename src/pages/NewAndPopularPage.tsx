import React from "react";
import Footer from "../components/HomePage/Footer";
import Row from "../components/HomePage/Row";
import Navbar from "../components/UI/Navbar";
import { categories } from "../data";

function NewAndPopularPage() {
  return (
    <div className="relative min-h-screen bg-[#181512]">
      <Navbar />

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

export default NewAndPopularPage;
