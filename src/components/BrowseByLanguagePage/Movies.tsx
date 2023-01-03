import React, { useEffect, useState } from "react";
import { films } from "../../data";
import Movie from "./Movie";

interface Film {
  id: number;
  title: string;
  banner: string;
  time: string;
  forAdults: boolean;
  types: string[];
}

interface Films {
  films: Array<Film>;
}

function Movies() {
  return (
    <div className="mx-10 flex flex-wrap space-x-2 items-center justify-center">
      {films.map((film) => (
        <Movie imgUrl={film.banner} />
      ))}
    </div>
  );
}

export default Movies;
