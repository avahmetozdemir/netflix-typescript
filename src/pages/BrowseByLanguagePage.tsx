import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Filters from "../components/BrowseByLanguagePage/Filters";
import Movies from "../components/BrowseByLanguagePage/Movies";
import Footer from "../components/HomePage/Footer";
import Navbar from "../components/UI/Navbar";
import { fetchMovies } from "../redux/features/NetflixSlice";
import { RootState, useAppDispatch } from "../redux/store";

function BrowseByLanguagePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ type: "all" }));
  }, [dispatch]);
  const movies = useSelector((state: RootState) => state.netflix.movies);
  return (
    <div className="bg-[#181512] min-h-screen">
      <Navbar />
      <Filters />
      <Movies movies={movies} />
      <Footer />
    </div>
  );
}

export default BrowseByLanguagePage;
