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
    <div className="text-white ml-[20px] mt-2">
      <h1 className="cursor-pointer">{categoryName}</h1>

      <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide p-[20px]">
        {movies.map((movie: Movie) => (
          <img
            className={`h-[100px] w-full mr-2  hover:scale-150  cursor-pointer hover:before:content-["${movie.title} Ahmet"]`}
            src={movie.banner}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
