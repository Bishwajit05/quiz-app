import React from "react";
import { useNavigate } from "react-router-dom";

import ModalData from "./ModalData";

import { TfiInfoAlt } from "react-icons/tfi";
import { GrFormClose } from "react-icons/gr";
import { TfiMedallAlt } from "react-icons/tfi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface modalProps {
  open: boolean;
  onClose: () => void;
}
interface Data {
  id: number;
  title: string;
  subHeading: string;
  image: any;
}

const Modal: React.FC<modalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    onClose();
  };
  const data: Data[] = [
    {
      id: 1,
      title: "1 min",
      subHeading: "Keep in mind that it's time bound quiz.",
      image: AiOutlineClockCircle,
    },
    {
      id: 2,
      title: "5 Questions",
      subHeading: "We believe that you will ace it!",
      image: AiOutlineQuestionCircle,
    },
    {
      id: 3,
      title: "50% passing criteria",
      subHeading: "All the best! See you on the other side.",
      image: TfiMedallAlt,
    },
  ];

  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex bottom-[50%] md:bottom-[20%] md:items-center justify-center">
      <div
        className="fixed inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>

      <div className="overflow-auto bg-white md:rounded-xl rounded-t-xl p-4 md:p-8 lg:p-12 transform translate-y-full md:translate-y-0 mx-4 md:mx-auto min-w-full md:min-w-[50%]">
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
          <ModalData modalData={data} />

          {/* <span className="inline-flex gap-2 items-center text-sm text-gray-600 bg-purple-200 h-6 w-fit px-2 justify-center rounded-sm my-3 sm:text-xs">
            <TfiInfoAlt className="rounded-full bg-transparent" />
            This quiz can be attempted once daily
          </span> */}
          <button
            onClick={() => navigate("/quiz")}
            type="button"
            className="w-1/3 justify-center items-center h-14 rounded-3xl bg-purple-700 my-3 text-white text-xl font-semibold hover:bg-purple-600"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
