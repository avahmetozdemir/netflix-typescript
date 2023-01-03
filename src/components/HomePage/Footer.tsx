import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div className="max-w-[900px] mx-auto mt-10 pb-3">
      <div className="flex flex-row mb-3 space-x-6">
        <FiFacebook color="white" size={20} className="cursor-pointer" />
        <FiInstagram color="white" size={20} className="cursor-pointer" />
        <FiTwitter color="white" size={20} className="cursor-pointer" />
        <FiYoutube color="white" size={20} className="cursor-pointer" />
      </div>
      <div className="flex flex-row justify-between text-[#4F4C46] text-[15px] mb-3 ">
        <div className="flex flex-col space-y-3 ">
          <h2 className="cursor-pointer">Audio Description</h2>
          <h2 className="cursor-pointer">Investor Relation</h2>
          <h2 className="cursor-pointer">Legal Notices</h2>
        </div>
        <div className="flex flex-col space-y-3 ">
          <h2 className="cursor-pointer">Help Center</h2>
          <h2 className="cursor-pointer">Jobs</h2>
          <h2 className="cursor-pointer">Cookie Preferences</h2>
        </div>
        <div className="flex flex-col space-y-3 ">
          <h2 className="cursor-pointer">Gift Cards</h2>
          <h2 className="cursor-pointer">Terms of Use</h2>
          <h2 className="cursor-pointer">Corporate Information</h2>
        </div>
        <div className="flex flex-col space-y-3 ">
          <h2 className="cursor-pointer">Media Center</h2>
          <h2 className="cursor-pointer">Privacy</h2>
          <h2 className="cursor-pointer">Contact Us</h2>
        </div>
      </div>
      <div className="border-2 border-[#4F4C46] w-[120px] mb-2">
        <h1 className="text-[#4F4C46] p-1 text-[15px] text-center cursor-pointer ">
          Service Code
        </h1>
      </div>
      <p className="text-[#4F4C46] text-[15px]">
        &copy; 1997-2023 Netflix,Inc.{" "}
      </p>
    </div>
  );
}

export default Footer;
