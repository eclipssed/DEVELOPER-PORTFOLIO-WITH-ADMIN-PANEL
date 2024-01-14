"use client";

import EditExperienceInputCard from "../../../components/admin-panel/EditExperienceInputCard";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const experiencePage = () => {
  const [experience, setExperience] = useState([]);
  const fetchExperience = async () => {
    const res = await axios("/api/admin-panel/experience");
    setExperience(res.data.experience);
  };
  useEffect(() => {
    fetchExperience();
  }, []);

  const handleDelete = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete experience."
    );
    if (confirmed) {
      try {
        // console.log(_id);
        const res = await axios.patch("/api/admin-panel/experience", { _id });
        if (res.data.status === 200) {
          toast.success(res.data.message);
          fetchExperience();
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

export default experiencePage;
