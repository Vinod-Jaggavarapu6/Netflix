import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/3 ">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black  font-bold p-4 px-12 text-lg  rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-4 bg-gray-200 font-bold p-4 px-12 text-lg bg-opacity-50 rounded-md hover:bg-opacity-80">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
