import React, { useState } from "react";
import { Movie } from "./Rows";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
interface CardProps {
  movie: Movie;
}

function Card({ movie }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-[230px] w-[230px] cursor-pointer relative h-full"
    >
      <img
        className="rounded-md w-full h-full -z-1"
        src={`https://image.tmdb.org/t/p/w500${movie.image}`}
        alt={movie.name}
      />
      {isHovered && (
        <div className="z-10 w-[260px] absolute -top-[180px] left-0 rounded-md bg-[#181818] ease-in-out duration-300 ">
          <div className="relative h-[140px]">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.image}`}
              alt=""
              className="w-full h-[140px] object-cover rounded-md top-0  "
            />
            <video
              src=""
              className="w-full h-[140px] object-cover rounded-md top-0 "
            ></video>
          </div>
          <div className="flex flex-col p-1 space-x-3">
            <h3 className="">{movie.name}</h3>
            <div className="flex ">
              <div className="flex space-x-6">
                <IoPlayCircleSharp title="play" />
                <RiThumbUpFill title="like" />
                <RiThumbDownFill title="dislike" />
                {isLiked ? (
                  <BsCheck title="Remove from list" />
                ) : (
                  <AiOutlinePlus title="Add to my list" />
                )}
              </div>
              <div className="">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="flex">
              <ul className="flex space-x-6">
                {movie.genres?.map((genre) => (
                  <li className="pr-[11px]">{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
