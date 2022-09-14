import React from 'react';

const InfoCard = ({ title, text, id }) => {
  return (
    <div className="my-7">
      {/* Header Card */}
      <div className="ml-7 bg-brigthRed bg-opacity-20 z-0 w-full h-[30px]">
        <div className="flex text-center justify-center">
          <h2 className="mt-1">{title}</h2>
        </div>

        <div className="bg-brigthRed w-[15%] h-10 rounded-[3rem] -top-7 -left-4 relative flex text-center justify-center items-center">
          <span className="text-white font-bold mb-1">{id}</span>
        </div>
      </div>
      {/* Text Cards */}
      <div className="ml-4 mt-3 w-[95%]">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
