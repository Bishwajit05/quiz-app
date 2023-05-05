import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { RiSwordLine } from "react-icons/ri";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import Modal from "../components/Modal";
import ReadMore from "../components/ReadMore";
import Thumbnail from "../utilities/thumbnail1.webp";
import ReactImage from "../utilities/pexels-rachel-claire-5490276.jpg";

const Homepage = () => {
  const [open, setOpen] = useState(false);
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
        <div className="md:grow">
          <img
            src={Thumbnail}
            alt="abcd"
            className="aspect-video w-full h-48 md:h-128 object-fit"
          />
        </div>
        <div className="md:w-1/4 pl-6 md:pl-0">
          <h1 className="text-3xl text-gray-800 font-bold py-6 md:flex md:justify-center">
            The Daily MS Excel Quiz
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-col gap-3 text-sm font-semibold  w-2/4">
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
              </div>
              <br></br>
              <span className="text-xs">people enrolled</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 md:w-3/4 pt-6 text-justify">
        <ReadMore
          text="The Microsoft Excel Proficiency Test is a comprehensive evaluation of an
                  individual's knowledge and skills in using Microsoft Excel. The test
                  covers a wide range of topics, including data manipulation, formatting,
                  functions, and more. The questions are designed to assess an
                  individual's understanding of the basic and advanced features of Excel,
                  including the use of formulas and functions, conditional formatting,
                  charts and graphs, and data management."
        />
      </div>
      <div className="pl-6 py-4">
        <h1 className="font-bold text-xl pb-2">This Quiz includes</h1>
        <div className="flex flex-col gap-3 text-sm w-2/4">
          <span className="inline-flex gap-2 items-center cursor-pointer">
            <GrDocument size={20} /> 50% Passing Percentage
          </span>
          <span className="inline-flex gap-2 items-center cursor-pointer">
            <AiOutlineQuestionCircle size={20} /> 5 Questions
          </span>
          <span className="inline-flex gap-2 items-center cursor-pointer">
            <AiOutlineClockCircle size={20} /> 1 min
          </span>
          <span className="inline-flex gap-2 items-center cursor-pointer">
            <HiOutlineSquare2Stack size={20} /> 1 Attempt Daily
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-purple-800 hover:bg-purple-700 flex items-center justify-center h-14 w-1/3 rounded-3xl border-0"
        >
          Take Quiz
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(!open)} />
    </div>
  );
};

export default Homepage;
