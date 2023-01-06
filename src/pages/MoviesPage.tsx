import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/HomePage/Footer";
import Row from "../components/HomePage/Row";
import BannerPage from "../components/TvShowsPage/BannerPage";
import Genres from "../components/TvShowsPage/Genres";
import SubNavbar from "../components/TvShowsPage/SubNavbar";
import Navbar from "../components/UI/Navbar";
import Rows from "../components/UI/Rows";
import { categories } from "../data";
import { fetchMovies } from "../redux/features/NetflixSlice";
import { RootState, useAppDispatch } from "../redux/store";

function MoviesPage() {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [showBannerPage, setShowBannerPage] = useState<boolean>(true);
  const [showGender, setShowGender] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ type: "all" }));
  }, [dispatch]);
  const movies = useSelector((state: RootState) => state.netflix.movies);

  //   const genresRef = useRef(null);

  //   useEffect(() => {
  //     document.addEventListener("click", handleClickOfGenres, true);
  //   }, []);

  //   function handleClickOfGenres(e: any) {
  //     if (!genresRef.current?.contains(e.target)) {
  //       setShowGender(false);
  //     }
  //   }

  return (
    <div className="relative min-h-screen bg-[#181512]">
      <Navbar />
      <SubNavbar
        pageInfo="Movies"
        showGender={showGender}
        setShowGender={setShowGender}
        showSuggestion={showSuggestion}
        showBannerPage={showBannerPage}
        setShowBannerPage={setShowBannerPage}
        setShowSuggestion={setShowSuggestion}
      />
      {showGender && (
        <div className="absolute left-[210px]">
          <Genres />
        </div>
      )}

      {showBannerPage && (
        <div className="absolute w-full top-0 -z-40">
          <BannerPage />
        </div>
      )}
      <Rows movies={movies} />

      <Footer />
    </div>
  );
}

export default MoviesPage;
