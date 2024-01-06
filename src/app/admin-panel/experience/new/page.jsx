"use client";
import AddExperienceInputCard from "@/components/admin-panel/AddExperienceInputCard";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [experience, setExperience] = useState("");
  const handleAddExperience = async () => {
    try {
      const res = await axios.post("/api/admin-panel/experience/new", { experience });
      if (res.data.status === 200) {
        toast.success(res.data.message);
        router.push("/admin-panel/experience");
      } else {
        toast.error(res.data.message);
      }
      setExperience("");
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };
  return (
    <section className="wrapper">
      <AddExperienceInputCard
        addExperience={experience}
        setAddExperience={setExperience}
        handleAddExperience={handleAddExperience}
      />
    </section>
  );
};

export default page;
