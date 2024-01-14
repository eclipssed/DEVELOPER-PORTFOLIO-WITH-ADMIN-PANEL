"use client";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import Link from "next/link";
const ProjectCard = ({
  _id,
  image,
  title,
  description,
  githubUrl,
  previewUrl,
  handleDelete,
}) => {
  return (
    <div className="border-2 border-primary rounded-lg p-4">
      <div className="space-x-2 my-2">
        <button className="btn">
          <Link href={"/admin-panel/projects/edit/" + _id}>Edit</Link>
        </button>
        <button onClick={() => handleDelete(_id)} className="btn">
          Delete
        </button>
      </div>
      <div
        className="h-40 w-40 mx-auto rounded-xl relative group"
        style={{ background: `url(${image})`, backgroundSize: "cover" }}
      >
        {" "}
        {/* overlay */}
        <div className="absolute rounded-xl h-full w-full top-0 right-0 hidden bg-[#121212] bg-opacity-0 group-hover:flex group-hover:bg-opacity-70 ease-in-out duration-500 gap-4 justify-center items-center">
          <Link
            href={githubUrl}
            className="h-14 w-14 border-2 border-light hover:border-white rounded-full flex justify-center items-center hover:!text-white group/link"
          >
            <IoCodeSlash className="h-10 w-10 text-light cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 border-light hover:border-white rounded-full flex justify-center items-center hover:!text-white group/link"
          >
            <IoEye className="h-10 w-10  text-light cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className=" rounded-xl py-6 px-4">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h2>
        <p className="text-base md:text-lg line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
