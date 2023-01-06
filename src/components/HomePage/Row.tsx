import React from "react";
import { categories } from "../../data";
import { Movie } from "../UI/Rows";

interface CategoryProps {
  data: Array<Movie>;
  title: string;
}

function Row({ data, title }: CategoryProps) {
  return (
    <div className="text-white ml-10 mt-2">
      <h1 className="cursor-pointer">{title}</h1>

      <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide p-[20px]">
        {data.map((movie: Movie) => (
          <img
            className={`h-[100px] w-full mr-2  hover:scale-150  cursor-pointer `}
            src={`https://image.tmdb.org/t/p/w500${movie.image}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
