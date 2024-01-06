"use client";

import AddExperienceInputCard from "@/components/admin-panel/AddExperienceInputCard";

import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [experience, setExperience] = useState("");
  const _id = params;

  const fetchExperience = async () => {
    const res = await axios.put("/api/admin-panel/experience", { _id });
    setExperience(res.data.experience.experience);
  };
  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <section className="wrapper">
      <AddExperienceInputCard
        edit_id={_id}
        editExperience={experience}
        setEditExperience={setExperience}
      />
    </section>
  );
};

export default page;
