import { useState } from "react";

const Tab = ({ toggle, updateToggle }) => {
  return (
    <div>
      <div className="tab flex items-center justify-between max-w-[350px] w-full h-[40px] rounded-lg bg-gray-300">
        <button
          onClick={() => updateToggle(1)}
          className={
            toggle === 1
              ? "font-red font-bold text-base text-green bg-white px-8 h-[40px] rounded-lg"
              : "font-red font-normal text-base text-[#606060] px-8 h-[40px] rounded-lg"
          }
        >
          Daily
        </button>
        <button
          onClick={() => updateToggle(2)}
          className={
            toggle === 2
              ? "font-red font-bold text-base text-green bg-white px-8 h-[40px] rounded-lg"
              : "font-red font-normal text-base text-[#606060] px-8 h-[40px] rounded-lg"
          }
        >
          Weekly
        </button>
        <button
          onClick={() => updateToggle(3)}
          className={
            toggle === 3
              ? "font-red font-bold text-base text-green bg-white px-8 h-[40px] rounded-lg"
              : "font-red font-normal text-base text-[#606060] px-8 h-[40px] rounded-lg"
          }
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default Tab;
