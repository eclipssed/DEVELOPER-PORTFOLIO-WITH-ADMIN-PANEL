"use client";

import EditSkillInputCard from "../../../components/admin-panel/EditSkillInputCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getSkills } from "../../../libs/data";
import { deleteSkill } from "@/libs/admin-panel/actions";

const skillsPage = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    getSkills()
      .then((data) => JSON.parse(data))
      .then((data) => setSkills(data));
  }, []);

  const handleDelete = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete the skill."
    );
    if (confirmed) {
      try {
        const res = await deleteSkill(_id);
        if (res) {
          toast.success("successfully deleted the skill");
          getSkills()
            .then((data) => JSON.parse(data))
            .then((data) => setSkills(data));
        }
      } catch (error) {
        console.log("Error while updating skill: ", error);
        toast.error("Error while deleting skill.");
      }
    } else {
      return;
    }
  };

  return (
    <section className="wrapper">
      <div className="text-center my-4">
        <Link href={"/admin-panel/skills/new"}>
          <button className=" btn">Add new skill</button>
        </Link>
      </div>
      <div>
        {skills?.map((skill) => (
          <EditSkillInputCard {...skill} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
};

export default skillsPage;
