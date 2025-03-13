import React from "react";
import couch from "../assets/couch.png";
import app from "../assets/app.svg";

const Header = () => {
  return (
    <header className="relative pt-16 md:pt-20 lg:pt-8">
      <div className="absolute bg-gradient-to-b from-amber-400 to-amber-500 inset-0   bottom-8 md:bottom-12 lg:bottom-20 -z-10"></div>
      <div className="container mx-auto grid grid-rows-1 place-items-end px-2">
        <img
          src={couch}
          alt="Couch"
          className="row-start-1 row-end-2 col-start-1 col-end-2 mx-auto "
        />
        <img
          src={app}
          alt="App"
          className="row-start-1 row-end-2 col-start-1 col-end-2 mx-auto w-40 md:w-64 lg:w-72"
        />
      </div>
    </header>
  );
};

export default Header;
