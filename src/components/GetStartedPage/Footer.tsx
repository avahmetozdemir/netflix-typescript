import { TbWorld } from "react-icons/tb";

function Footer() {
  return (
    <div className=" bg-black">
      <div className="px-[300px] py-5">
        <h3 className="text-[#4F4C46] mb-2">Questions? Call 0850-390-7444</h3>
        <div className="flex flex-row justify-between text-[#4F4C46] text-[15px] mb-3 space-y-2 ">
          <div className="flex flex-col space-y-3 ">
            <h2 className="cursor-pointer">FAQ</h2>
            <h2 className="cursor-pointer">Investor Relations</h2>
            <h2 className="cursor-pointer">Terms of Use</h2>
            <h2 className="cursor-pointer">Contact Us</h2>
          </div>
          <div className="flex flex-col space-y-3 ">
            <h2 className="cursor-pointer">Help Center</h2>
            <h2 className="cursor-pointer">Jobs</h2>
            <h2 className="cursor-pointer">Privacy</h2>
            <h2 className="cursor-pointer">Speed Test</h2>
          </div>
          <div className="flex flex-col space-y-3 ">
            <h2 className="cursor-pointer">Account</h2>
            <h2 className="cursor-pointer">Redeem Gift Cards</h2>
            <h2 className="cursor-pointer">Cookie Preferences</h2>
            <h2 className="cursor-pointer">Legal Notices</h2>
          </div>
          <div className="flex flex-col space-y-3 ">
            <h2 className="cursor-pointer">Media Center</h2>
            <h2 className="cursor-pointer">Ways to Watch</h2>
            <h2 className="cursor-pointer">Corporate Information</h2>
            <h2 className="cursor-pointer">Only on Netflix</h2>
          </div>
        </div>
        <div className="border border-white flex  bg-black/40 items-center w-[140px]">
          <div className=" bg-black/40 flex items-center justify-center p-2">
            <TbWorld size={20} color="white" className="w-full h-full" />
          </div>
          <select
            name="language"
            className=" p-2 bg-black/40 text-white border-none outline-none"
          >
            <option value="english">English</option>
            <option value="turkish">Türkçe</option>
          </select>
        </div>
        <p className="text-[#4F4C46] text-[15px] mt-2">Netflix Turkey</p>
      </div>
    </div>
  );
}

export default Footer;
