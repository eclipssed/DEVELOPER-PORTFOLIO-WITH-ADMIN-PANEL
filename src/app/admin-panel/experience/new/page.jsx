"use client";

import AddExperienceInputCard from "@/components/admin-panel/AddExperienceInputCard";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewExperiencePage = () => {
  const [experience, setExperience] = useState("");

  return (
    <section className="wrapper">
      <AddExperienceInputCard
        addExperience={experience}
        setAddExperience={setExperience}
      />
    </section>
  );
};

export default NewExperiencePage;
