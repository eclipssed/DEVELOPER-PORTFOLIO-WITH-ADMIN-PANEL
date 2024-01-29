import React from "react";
import { FaCrown } from "react-icons/fa6";

const ProjectSelectButton = ({ label, isSelected, handleSelect, tagName }) => {
  return (
    <div className="relative">
      <button
        onClick={() => handleSelect(tagName)}
        className={`px-8 py-3 rounded-full border-2 ${
          isSelected === tagName
            ? " border-primary text-white"
            : "border-slate-500 text-light  hover:border-white hover:text-white"
        }   font-semibold text-xl cursor-pointer `}
      >
        {label}
      </button>
      <div className="absolute -top-4 -right-0">
        {label === "Next.js" ? (
          <FaCrown className="text-yellow-500 h-8 w-8" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectSelectButton;
