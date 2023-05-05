import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { RiSwordLine } from "react-icons/ri";
import ReactImage from "../utilities/pexels-rachel-claire-5490276.jpg";
import Thumbnail from "../utilities/thumbnail1.webp";
const Homepage = () => {
  return (
    <div className="h-full w-full">
      <nav className="flex h-20 items-center justify-end gap-2 px-4">
        <FiSearch size={25} />

        <img
          src={ReactImage}
          alt="abcd"
          className="object-cover rounded-full h-10 w-10"
        />
      </nav>
      <div className="md:flex md:flex-row">
        <div className="md:3/4 md:grow">
          <img
            src={Thumbnail}
            alt="abcd"
            className="aspect-video w-full md:h-128 object-contain"
          />
        </div>
        <div className="md:w-1/4 pl-6 md:pl-0">
          <h1 className="text-3xl text-gray-800 font-bold py-6 md:flex md:justify-center">
            The Daily MS Excel Quiz
          </h1>
          <div className="flex flex-row md:invisible">
            <div className="flex flex-col gap-6 font-semibold  w-2/4">
              <span className="inline-flex gap-2 items-center cursor-pointer">
                <AiOutlineMessage size={20} /> Leave a comment
              </span>
              <span className="inline-flex gap-2 items-center cursor-pointer">
                <BsBookmarkStar size={20} /> Save Quiz
              </span>
              <span className="inline-flex gap-2 items-center cursor-pointer">
                <RiSwordLine size={20} /> Challenge a friend
              </span>
            </div>
            <div className="w-2/4 justify-center pl-10">
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
              </div><br></br>
              <span className="text-xs">people enrolled</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 pl-16 flex flex-col gap-6 font-semibold invisible md:visible">
        <span className="inline-flex gap-2 items-center cursor-pointer">
          <AiOutlineMessage size={20} /> Leave a comment
        </span>
        <span className="inline-flex gap-2 items-center cursor-pointer">
          <BsBookmarkStar size={20} /> Save Quiz
        </span>
        <span className="inline-flex gap-2 items-center cursor-pointer">
          <RiSwordLine size={20} /> Challenge a friend
        </span>
      </div>
    </div>
  );
};

export default Homepage;
