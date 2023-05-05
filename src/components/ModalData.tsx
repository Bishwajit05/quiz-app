import React from "react";

interface Data {
  id: number;
  title: string;
  subHeading: string;
  image: any;
}
interface modaDataProps {
  modalData: Data[];
}
const ModalData: React.FC<modaDataProps> = ({ modalData }) => {
  return (
    <div>
      {modalData.map((data) => (
        <div className="w-full inline-flex gap-2 items-center md:justify-center px-6 py-1 md:px-2">
          <data.image
            // size={35}
            className="bg-gray-200 rounded-full h-10 w-10 md:h-14 md:w-14"
          />
          <div className="md:w-1/3">
            <p className="font-bold text-lg md:text-3xl">{data.title}</p>
            <p className="text-gray-500 text-sm">{data.subHeading}</p>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default ModalData;
