import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description, githubUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute rounded-xl h-full w-full top-0 right-0 hidden bg-[#121212] bg-opacity-0 group-hover:flex group-hover:bg-opacity-70 ease-in-out duration-500 gap-4 justify-center items-center">
          <Link
            href={githubUrl ? githubUrl : "/"}
            className="h-14 w-14 border-2 border-light hover:border-white rounded-full flex justify-center items-center hover:!text-white group/link"
          >
            <IoCodeSlash className="h-10 w-10 text-light cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl ? previewUrl : "/"}
            className="h-14 w-14 border-2 border-light hover:border-white rounded-full flex justify-center items-center hover:!text-white group/link"
          >
            <IoEye className="h-10 w-10  text-light cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className=" rounded-xl bg-dark py-6 px-4">
        <h2 className="text-slate-200  text-xl font-semibold mb-2">{title}</h2>
        <p className="text-slate-400 text-base md:text-lg line-clamp-3 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
