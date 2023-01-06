import { Movie } from "../UI/Rows";
import MovieImg from "./MovieImg";

interface MoviesProps {
  movies: Array<Movie>;
}

function Movies({ movies }: MoviesProps) {
  return (
    <div className="mx-10 flex flex-wrap space-x-2 items-center justify-center">
      {movies.map((movie) => (
        <MovieImg imgUrl={`https://image.tmdb.org/t/p/w500${movie.image}`} />
      ))}
    </div>
  );
}

export default Movies;
