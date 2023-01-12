import React from "react";

function Kids() {
  return (
    <div className="bg-black border-b-8 border-gray-700 h-[400px]">
      <div className="px-[300px] py-[100px] flex justify-between">
        <div className="">
          <img
            className="w-[400px] h-[250px]"
            src="https://occ-0-1009-586.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
            alt=""
          />
        </div>

        <div className="flex flex-col space-y-4 text-white w-[500px]">
          <h1 className="text-5xl font-bold">Create profiles for kids.</h1>
          <h3 className="text-xl font-semibold">
            Sends kids on adventures with their favorite characters in a space
            made just for them-free with your membership.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Kids;
