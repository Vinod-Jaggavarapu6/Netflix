import React from "react";
import { NETFLIX_LOGO_IMG_URL, NETFLIX_USER_IMG_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-screen flex justify-between">
      <img
        src={NETFLIX_LOGO_IMG_URL}
        alt="Netflix Logo"
        className="w-[160px]"
      />

      {user && (
        <div className="flex items-center justify-between w-1/12">
          <img
            src={NETFLIX_USER_IMG_URL}
            alt="User Profile"
            className="h-[36px]"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
