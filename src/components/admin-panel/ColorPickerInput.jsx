import React from "react";

const ColorPickerInput = ({ color, handleColorChange, title, name }) => {
  return (
    <div className=" my-2 mr-40 gap-2 items-center py-2 px-4 bg-slate-600 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-white">{title}</h2>
        <div className="space-x-4 flex items-center">
          <span className=" text-black bg-white py-2 px-4 rounded-lg">
            {color}
          </span>
          <input
            type="color"
            value={color}
            name={name}
            onChange={handleColorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPickerInput;
