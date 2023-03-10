import Row from "../HomePage/Row";

export interface Movie {
  genres?: Array<string>;
  id: number;
  image?: string;
  name?: string;
}

interface RowsProps {
  movies: Array<Movie>;
}

function Rows({ movies }: RowsProps) {
  const getMoviesFromRange = (from: number, to: number) => {
    return movies?.slice(from, to);
  };
  return (
    <div className="">
      <Row data={getMoviesFromRange(0, 10)} title="Trending Now" />
      <Row data={getMoviesFromRange(10, 20)} title="New Releases" />
      <Row data={getMoviesFromRange(20, 30)} title="Political Shows" />
      <Row data={getMoviesFromRange(30, 40)} title="Dark Fantasy TV Shows" />
      <Row data={getMoviesFromRange(40, 50)} title="Popular on Netflix" />
      <Row data={getMoviesFromRange(50, 60)} title="Crime TV Shows" />
    </div>
  );
}

export default Rows;
