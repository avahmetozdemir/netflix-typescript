import React from "react";

function Genres() {
  return (
    <div className="bg-black/40 border border-gray-400 w-[550px] h-[200px] flex flex-row text-white">
      <div className="flex-1 space-y-1">
        <p className="cursor-pointer">Action</p>
        <p className="cursor-pointer">Anime</p>
        <p className="cursor-pointer">Award-Winning</p>
        <p className="cursor-pointer">Children & Family</p>
        <p className="cursor-pointer">Classics</p>
        <p className="cursor-pointer">Comedles</p>
        <p className="cursor-pointer">Documentaries</p>
      </div>
      <div className="flex-1 space-y-1">
        <p className="cursor-pointer">Dramas</p>
        <p className="cursor-pointer">Fantasy</p>
        <p className="cursor-pointer">Holidays</p>
        <p className="cursor-pointer">Horor</p>
        <p className="cursor-pointer">Independent</p>
        <p className="cursor-pointer">Music & Musicals</p>
        <p className="cursor-pointer">Romance</p>
      </div>
      <div className="flex-1 space-y-1">
        <p className="cursor-pointer">Sci-Fi</p>
        <p className="cursor-pointer">Shorts</p>
        <p className="cursor-pointer">Sports</p>
        <p className="cursor-pointer">Stand-Up Comedy</p>
        <p className="cursor-pointer">Thriller</p>
        <p className="cursor-pointer">Turkish</p>
      </div>
    </div>
  );
}

export default Genres;
