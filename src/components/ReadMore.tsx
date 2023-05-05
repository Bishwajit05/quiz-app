import React, { useState } from "react";

interface ReadMoreProps {
  text: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text }) => {
  const [isExpanded, SetIsExpanded] = useState(false);
  const maxLength = 2000;
  const toggleExpanded = () => SetIsExpanded(!isExpanded);
  const truncatedText = text.substring(0, maxLength);
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div onClick={toggleExpanded} className="pt-4">
      {isExpanded && (
        <div>
          <p>
            {text}
            <span className="font-semibold hover:text-gray-400 cursor-pointer">
              &nbsp;read less
            </span>{" "}
          </p>
        </div>
      )}
      {!isExpanded && (
        <div>
          <p>
            {truncatedText}
            <span className="font-semibold hover:text-gray-400 cursor-pointer">
              &nbsp;read more....
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
