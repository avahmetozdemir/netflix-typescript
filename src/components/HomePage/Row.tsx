import React from "react";
import { categories } from "../../data";

interface CategoryProps {
  categoryName: string;
  movies: Array<Movie>;
}

interface Movie extends Object {
  id: number;
  title: string;
  banner: string;
  time: string;
  forAdults: boolean;
  types: Array<string>;
}

function Row({ categoryName, movies }: CategoryProps) {
  return (
    <div className="text-white ml-[20px]">
      <h1 className="cursor-pointer">{categoryName}</h1>

      <div className=" flex overflow-y-hidden overflow-x-scroll whitespace-nowrap overflow-auto scrollbar-hide p-[20px]">
        {/* Carousel */}
        {movies.map(
          (movie: Movie): React.ReactNode => (
            <img
              className=" max-h-[100px] object-contain mr-3 w-full transition-transform delay-450 hover:scale-105 cursor-pointer"
              src={movie.banner}
              alt={movie.title}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Row;
