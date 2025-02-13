import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BG_IMG_URL } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-full">
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BG_IMG_URL} alt="netflix baground" />
      </div>
      <form className="w-4/12 p-12 absolute bg-black mx-auto right-0 left-0 my-36 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            type="test"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-800 rounded-md"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-md"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
