import React from "react";
import { NETFLIX_LOGO_IMG_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20">
      <img
        src={NETFLIX_LOGO_IMG_URL}
        alt="Netflix Logo"
        className="w-[160px]"
      />
    </div>
  );
};

export default Header;
