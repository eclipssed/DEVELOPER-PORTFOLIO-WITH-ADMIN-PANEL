"use client";
import AddSkillInputCard from "../../../../components/admin-panel/AddSkillInputCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [skill, setSkill] = useState("");
  const handleAddSkill = async () => {
    try {
      const res = await axios.post("/api/admin-panel/skills/new", { skill });
      if (res.data.status === 200) {
        toast.success(res.data.message);
        router.push("/admin-panel/skills");
      } else {
        toast.error(res.data.message);
      }
      setSkill("");
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };
  return (
    <section className="wrapper">
      <AddSkillInputCard
        addSkill={skill}
        setAddSkill={setSkill}
        handleAddSkill={handleAddSkill}
      />
    </section>
  );
};

export default page;
