import Banner from "../components/GetStartedPage/Banner";
import Footer from "../components/GetStartedPage/Footer";
import FrequentlyQuestions from "../components/GetStartedPage/FrequentlyQuestions";
import Kids from "../components/GetStartedPage/Kids";
import ShowTv from "../components/GetStartedPage/ShowTv";
import WatchEverywhere from "../components/GetStartedPage/WatchEverywhere";
import WatchOffline from "../components/GetStartedPage/WatchOffline";

function GetStartedPage() {
  return (
    <div className="min-h-screen">
      {/* input with banner part */}
      <Banner />
      {/* tv part */}
      <ShowTv />
      {/* watch offline part */}
      <WatchOffline />
      {/* everywhere part */}
      <WatchEverywhere />
      {/* for kids */}
      <Kids />
      {/* frequently asked questions */}
      <FrequentlyQuestions />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default GetStartedPage;
