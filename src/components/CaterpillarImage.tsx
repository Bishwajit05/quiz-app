import React from "react";
import ReactImage from "../utilities/pexels-rachel-claire-5490276.jpg";
const CaterpillarImage = () => {
  return (
    <div className="w-full justify-center pl-10">
      <div className="inline-flex">
        <img
          src={ReactImage}
          alt="profile"
          className="h-10 w-10 rounded-full z-0"
        />
        <img
          src={ReactImage}
          alt="profile"
          className="-ml-6 h-10 w-10 rounded-full z-20"
        />
        <img
          src={ReactImage}
          alt="profile"
          className="-ml-6 h-10 w-10 rounded-full z-20"
        />
        <img
          src={ReactImage}
          alt="profile"
          className="-ml-6 h-10 w-10 rounded-full z-20"
        />
        <span className="-ml-6 h-10 w-10 rounded-full z-30 items-center justify-center bg-purple-400 text-white flex">
          98+
        </span>
      </div>
      <br></br>
      <span className="text-xs">people enrolled</span>
    </div>
  );
};

export default CaterpillarImage;
