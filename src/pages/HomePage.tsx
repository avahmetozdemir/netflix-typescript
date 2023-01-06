import React, { useEffect, useState } from "react";
import FilmBanner from "../components/HomePage/FilmBanner";
import Footer from "../components/HomePage/Footer";
import Navbar from "../components/UI/Navbar";
import Row from "../components/HomePage/Row";
import { categories } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchMovies, getGenres } from "../redux/features/NetflixSlice";
import axios from "axios";

function HomePage() {
  const genres = useSelector((state: RootState) => state.netflix.genres);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovies({ type: "all" }));
  }, [dispatch]);
  const movies = useSelector((state: RootState) => state.netflix.movies);

  console.log(movies);

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
