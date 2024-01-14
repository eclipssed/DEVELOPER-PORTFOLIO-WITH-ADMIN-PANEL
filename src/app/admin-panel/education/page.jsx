"use client";

import EditEducationInputCard from '../../../components/admin-panel/EditEducationInputCard'
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const educationPage = () => {
  const [education, setEducation] = useState([]);
  const fetchEducation = async () => {
    const res = await axios("/api/admin-panel/education");
    setEducation(res.data.education);
  };
  useEffect(() => {
    fetchEducation();
  }, []);

  const handleDelete = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure that you want to Delete the education."
    );
    if (confirmed) {
      try {
        // console.log(_id);
        const res = await axios.patch("/api/admin-panel/education", { _id });
        if (res.data.status === 200) {
          toast.success(res.data.message);
          fetchEducation();
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
        <Link href={"/admin-panel/education/new"}>
          <button className=" btn">Add new Education</button>
        </Link>
      </div>
      <div>
        {education?.map((edu) => (
          <EditEducationInputCard {...edu} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
};

export default educationPage;
