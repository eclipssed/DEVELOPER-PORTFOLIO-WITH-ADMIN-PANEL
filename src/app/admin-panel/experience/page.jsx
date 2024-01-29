"use client";

import { getExperience } from "@/libs/data";
import EditExperienceInputCard from "../../../components/admin-panel/EditExperienceInputCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteExperience } from "@/libs/admin-panel/actions";

const page = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    getExperience()
      .then((data) => JSON.parse(data))
      .then((data) => setExperience(data));
  }, []);

  const handleDelete = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete the skill."
    );
    if (confirmed) {
      try {
        const res = await deleteExperience(_id);
        if (res) {
          toast.success("successfully deleted the experience.");
          getExperience()
            .then((data) => JSON.parse(data))
            .then((data) => setExperience(data));
        }
      } catch (error) {
        console.log("Error while deleting experience: ", error);
        toast.error("Error while deleting experience.");
      }
    } else {
      return;
    }
  };

  return (
    <section className="wrapper">
      <div className="text-center my-4">
        <Link href={"/admin-panel/experience/new"}>
          <button className=" btn">Add new Experience</button>
        </Link>
      </div>
      <div>
        {experience?.map((exp) => (
          <EditExperienceInputCard {...exp} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
};

export default page;
