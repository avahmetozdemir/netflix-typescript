import React from "react";
import Card from "../UI/Card";
import { Movie } from "../UI/Rows";

interface CategoryProps {
  data: Array<Movie>;
  title: string;
}

function Row({ data, title }: CategoryProps) {
  return (
    <div className="text-white ml-10 mt-2 ">
      <h1 className="cursor-pointer">{title}</h1>

      <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide p-[20px] space-x-2 ">
        {data.map((movie: Movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Row;
