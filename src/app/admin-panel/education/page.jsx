"use client";

import EditEducationInputCard from "../../../components/admin-panel/EditEducationInputCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getEducation } from "../../../libs/data";
import { deleteEducation } from "@/libs/admin-panel/actions";

const EducationPage = () => {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    getEducation()
      .then((data) => JSON.parse(data))
      .then((data) => setEducation(data));
  }, []);

  const handleDelete = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete the skill."
    );
    if (confirmed) {
      try {
        const res = await deleteEducation(_id);
        if (res) {
          toast.success("successfully deleted the education.");
          getEducation()
            .then((data) => JSON.parse(data))
            .then((data) => setEducation(data));
        }
      } catch (error) {
        console.log("Error while deleting education: ", error);
        toast.error("Error while deleting education.");
      }
    } else {
      return;
    }
  };

  return (
    <section className="wrapper">
      <div className="text-center my-4">
        <Link href={"/admin-panel/education/new"}>
          <button className=" btn">Add new Education</button>
        </Link>
      </div>
      <div>
        {education?.map((edu, index) => (
          <EditEducationInputCard
            key={index}
            {...edu}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
