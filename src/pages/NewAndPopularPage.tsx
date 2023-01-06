import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/HomePage/Footer";
import Row from "../components/HomePage/Row";
import Navbar from "../components/UI/Navbar";
import Rows from "../components/UI/Rows";
import { categories } from "../data";
import { fetchMovies } from "../redux/features/NetflixSlice";
import { RootState, useAppDispatch } from "../redux/store";

function NewAndPopularPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ type: "all" }));
  }, [dispatch]);
  const movies = useSelector((state: RootState) => state.netflix.movies);
  return (
    <div className="relative min-h-screen bg-[#181512]">
      <Navbar />
      <Rows movies={movies} />

      <Footer />
    </div>
  );
}

export default NewAndPopularPage;
