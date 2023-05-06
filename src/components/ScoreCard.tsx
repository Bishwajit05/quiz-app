import React from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";

import Org from "../utilities/1663836897587-seekho-logo-for-white-bg.png";

interface ScoreCardProps {
  score: number;
  timeTaken: number;
  totalQuestions: number;
}
const ScoreCard: React.FC<ScoreCardProps> = ({
  score,
  timeTaken,
  totalQuestions,
}) => {
  const navigate = useNavigate();
  const percentage = (score / totalQuestions) * 100;
  return (
    <div>
      <nav className="h-16 flex justify-start pl-4 mt-4 cursor-pointer">
        <AiOutlineArrowLeft size={25} onClick={() => navigate("/")} />
      </nav>
      <div className="flex h-auto bg-purple-400 items-center flex-col">
        <h1 className="font-bold text-zinc-950 text-3xl py-3 text-center">
          The Daily MS Excel Quiz
        </h1>
        <div className="h-auto bg-slate-100 w-3/4 rounded-2xl drop-shadow-2xl flex flex-col items-center py-4">
          <h1 className="text-black md:text-5xl text:xl">
            You scored :&nbsp;
            <span className="text-purple-700 md:text-5xl text-2xl  font-bold">
              {percentage}%
            </span>
          </h1>
          <div className="flex justify-center flex-col items-center md:w-1/2 w-3/4">
            <p className="font-semibold md:text-2xl text-base text-zinc-900 py-4 text-cneter">
              {percentage < 50
                ? "Oh snap ,You can do better"
                : "Excellent keep the good work"}
            </p>
            <p className="md:text-xl text-zinc-700 text-xs text-center">
              Success is not final, failure is not fatal; it is the courage to
              continue that counts
            </p>
          </div>
        </div>
        <div className="flex flex-col w-3/4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold">Your Score</p>
              <span className="font-bold text-purple-900 text-3xl">
                {score}/{totalQuestions}
              </span>
              <span className="font-semibold">Avg: 2 marks</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold">Time Taken</p>
              <span className="font-bold text-purple-900 text-3xl ">
                {60 - timeTaken} sec
              </span>
              <span className="font-semibold">Avg: 40 sec</span>
            </div>
          </div>
          <div className="flex w-full items-center py-10 flex-col">
            <img src={Org} alt="org" className="h-20 w-30" />
            <button
              className="w- rounded-xl h-10 my-6 px-2 bg-fuchsia-800 hover:bg-fuchsia-700 text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
