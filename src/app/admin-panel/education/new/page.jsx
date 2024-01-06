"use client";
import AddEducationInputCard from "@/components/admin-panel/AddEducationInputCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [education, setEducation] = useState("");
  const handleAddSkill = async () => {
    try {
      const res = await axios.post("/api/admin-panel/education/new", {
        education,
      });
      if (res.data.status === 200) {
        toast.success(res.data.message);
        router.push("/admin-panel/education");
      } else {
        toast.error(res.data.message);
      }
      setEducation("");
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };
  return (
    <section className="wrapper">
      <AddEducationInputCard
        addEducation={education}
        setAddEducation={setEducation}
        handleAddEducation={handleAddSkill}
      />
    </section>
  );
};

export default page;
