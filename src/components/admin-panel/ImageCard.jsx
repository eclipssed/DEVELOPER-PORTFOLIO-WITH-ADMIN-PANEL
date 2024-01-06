import React from "react";
import Image from "next/image";

const ImageCard = ({ height, width, src, handleFileChange, name }) => {
  return (
    <div className="p-4 rounded-lg border-2 flex items-center gap-2 border-[#0F172A]">
      <div className="mr-8">
        <h2 className="text-2xl font-bold text-black">{name}</h2>
      </div>
      <div className="">
        <Image alt="image" height={height} width={width} src={src} />
      </div>
      <div>
        <label className="btn cursor-pointer">
          <input
            type="file"
            className="hidden"
            name={name}
            onChange={handleFileChange}
          />
          <span>Update</span>
        </label>
      </div>
    </div>
  );
};

export default ImageCard;
