import React from "react";

const CVCard = ({ href, handleFileChange }) => {
  return (
    <div className="p-4 rounded-lg border-2 flex items-center gap-2 border-[#0F172A]">
      <div className="mr-8">
        <h2 className="text-2xl font-bold text-black">CV</h2>
      </div>
      <button className="btn">
        <a
          href={href}
          download={true}
          className="block bg-dark rounded-full px-5 py-2"
        >
          Download CV
        </a>
      </button>
      <div>
        <label className="btn cursor-pointer">
          <input
            type="file"
            className="hidden"
            name="cv"
            onChange={handleFileChange}
          />
          <span>Update</span>
        </label>
      </div>
    </div>
  );
};

export default CVCard;
