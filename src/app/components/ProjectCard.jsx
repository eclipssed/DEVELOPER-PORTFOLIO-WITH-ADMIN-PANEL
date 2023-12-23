import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {" "}
        {/* overlay */}
        <div className="absolute h-full w-full top-0 right-0 hidden bg-[#121212] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 ease-linear duration-500 gap-4 justify-center items-center">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 border-[#adb7be] hover:border-white rounded-full flex justify-center items-center hover:!text-white group/link"
          >
            <IoCodeSlash className="h-10 w-10 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 border-[#adb7be] hover:border-white rounded-full flex justify-center items-center hover:!text-white group/link"
          >
            <IoEye className="h-10 w-10  text-[#adb7be] cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-xl bg-[#121212] py-6 px-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
