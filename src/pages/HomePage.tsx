import React, { useEffect, useState } from "react";
import FilmBanner from "../components/HomePage/FilmBanner";
import Footer from "../components/HomePage/Footer";
import Navbar from "../components/UI/Navbar";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchMovies, getGenres } from "../redux/features/NetflixSlice";
import Rows from "../components/UI/Rows";

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
    <div className="min-h-screen bg-[#181512]">
      <Navbar />
      <FilmBanner />
      <Rows movies={movies} />
      <Footer />
    </div>
  );
}

export default HomePage;
