import banner from "../../assets/background/banner.jpg";
import Button from "../UI/Button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
function BannerPage() {
  return (
    <div className="max-h-[500px] relative">
      <img src={banner} alt="banner" className="w-full h-[500px] " />
      <div className="absolute bottom-[150px] left-[30px] flex flex-col justify-center space-y-2 text-white ">
        <h1 className="font-semibold text-[25px]">#8 in TV Shows Today</h1>
        <p className="text-[20px]">
          An MI6 deputy's brighy future takes a sharp turn after a reunion{" "}
          <br />
          with a Russion spy forces him to question his entire life.
        </p>
        <div className="flex space-x-3">
          <Button icon="play" style="bg-white text-black">
            Play
          </Button>
          <Button icon="info" style="bg-black text-white">
            More Info
          </Button>
        </div>
      </div>
      <div className="absolute bottom-[100px] right-0">
        <div className="flex flex-row space-x-2">
          <ArrowPathIcon className="w-7 h-7 text-[#181512] cursor-pointer" />
          <div className="w-[60px] bg-[#181512]">
            <p className="text-white p-1 ml-1">18+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerPage;
