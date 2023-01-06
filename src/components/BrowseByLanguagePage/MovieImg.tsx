interface MovieProp {
  imgUrl: string;
}

function MovieImg({ imgUrl }: MovieProp) {
  return (
    <img
      src={imgUrl}
      alt=""
      className="w-1/6 h-20v my-4 rounded-lg hover:scale-150"
    />
  );
}

export default MovieImg;
