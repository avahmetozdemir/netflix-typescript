import React from "react";

interface MovieProp {
  imgUrl: string;
}

function Movie({ imgUrl }: MovieProp) {
  return (
    <img
      src={imgUrl}
      alt=""
      className="w-1/6 h-20v my-4 rounded-lg hover:scale-150"
    />
  );
}

export default Movie;
