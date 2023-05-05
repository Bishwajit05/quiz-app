import React from "react";
import { TfiInfoAlt } from "react-icons/tfi";
import { GrFormClose } from "react-icons/gr";
import { TfiMedallAlt } from "react-icons/tfi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface modalProps {
  open: boolean;
  onClose: () => void;
}
const Modal: React.FC<modalProps> = ({ open, onClose }) => {
  const handleClick = () => {
    onClose();
  };

  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex bottom-[50%] md:bottom-[20%] md:items-center justify-center">
      <div
        className="fixed inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>

      <div className="bg-white md:rounded-xl rounded-t-xl p-4 md:p-8 lg:p-12 transform translate-y-full md:translate-y-0 mx-4 md:mx-auto min-w-full md:min-w-[50%]">
        <div className="flex justify-between w-full">
          <h2 className="text-3xl font-bold mb-4">Quiz Rules</h2>
          <div
            onClick={handleClick}
            className="cursor-pointer rounded-full bg-slate-200 w-10 h-10 flex items-center justify-center hover:bg-slate-100"
          >
            <GrFormClose size={30} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start">
          <div className="w-full inline-flex gap-2 items-center px-6 py-3">
            <AiOutlineClockCircle
              size={35}
              className="bg-gray-200 rounded-full h-10 w-10"
            />
            <div>
              <p className="font-bold text-2xl">1 min</p>
              <p className="text-gray-500 text-lg">
                Keep in mind that it's time bound quiz.
              </p>
            </div>
          </div>
          <div className="w-full inline-flex gap-2 items-center px-6 py-3">
            <AiOutlineQuestionCircle
              size={35}
              className="bg-gray-200 rounded-full h-10 w-10"
            />
            <div>
              <p className="font-bold text-2xl">5 Questions</p>
              <p className="text-gray-500 text-lg">
                We believe that you will ace it!
              </p>
            </div>
          </div>
          <div className="w-full inline-flex gap-2 items-center px-6 py-3">
            <TfiMedallAlt
              size={30}
              className="bg-gray-200 rounded-full h-10 w-10"
            />
            <div>
              <p className="font-bold text-2xl">50% passing criteria</p>
              <p className="text-gray-500 text-lg">
                All the best! See you on the other side.
              </p>
            </div>
          </div>
          <span className="inline-flex gap-2 items-center text-sm text-gray-600 bg-purple-200 h-6 w-fit px-2 justify-center rounded-sm my-3">
            <TfiInfoAlt className="rounded-full bg-purple-700" /> This quiz can
            be attempted once daily
          </span>
          <button type="button" className="w-1/3 justify-center items-center h-14 rounded-3xl bg-purple-700 my-3 text-white text-xl font-semibold hover:bg-purple-600">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
