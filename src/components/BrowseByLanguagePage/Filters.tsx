import React from "react";

function Filters() {
  return (
    <div className="mx-10">
      <div className="flex justify-between text-white items-center">
        <h1 className="text-3xl">Browse by Languages</h1>
        <div className="flex space-x-3 items-center">
          <h2>Select Your Preferences</h2>
          <select
            name="types"
            className="bg-black text-white border-1 border-white p-2"
          >
            <option value="original">Original Language</option>
            <option value="dubbing">Dubbing</option>
            <option value="subtitle">Subtitles</option>
          </select>
          <select
            name="languages"
            className="bg-black text-white border-1 border-white p-2"
          >
            <option value="arabic">Arabic</option>
            <option value="cantonese">Cantonese</option>
            <option value="danish">Danish</option>
            <option value="dutch">Dutch</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="hindi">Hindi</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="polish">Polish</option>
            <option value="portuguese">Portoguese</option>
            <option value="spanish">Spanish</option>
            <option value="swedish">Swedish</option>
            <option value="tamil">Tamil</option>
            <option value="telugu">Telugu</option>
            <option value="turkish">Turkish</option>
          </select>
          <h2>Sort by</h2>
          <select
            name="sortby"
            className="bg-black text-white border-1 border-white p-2"
          >
            <option value="suggestions">Suggestions for you</option>
            <option value="released">Year Released</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
