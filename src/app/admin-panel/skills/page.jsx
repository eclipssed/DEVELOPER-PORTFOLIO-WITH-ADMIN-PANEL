"use client";

import EditSkillInputCard from "../../../components/admin-panel/EditSkillInputCard";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const skillsPage = () => {
  const [skills, setSkills] = useState([]);
  const fetchSkills = async () => {
    const res = await axios("/api/admin-panel/skills");
    setSkills(res.data.skills);
  };
  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete the skill."
    );
    if (confirmed) {
      try {
        // console.log(_id);
        const res = await axios.patch("/api/admin-panel/skills", { _id });
        if (res.data.status === 200) {
          toast.success(res.data.message);
          fetchSkills();
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error(error);
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
