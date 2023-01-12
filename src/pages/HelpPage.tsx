import React from "react";
import HelpNavbar from "../components/HelpPage/HelpNavbar";
import Main from "../components/HelpPage/Main";
import Speeech from "../components/HelpPage/Speeech";

function HelpPage() {
  return (
    <div className="">
      <HelpNavbar />
      <Speeech />
      <Main />
    </div>
  );
}

export default HelpPage;
