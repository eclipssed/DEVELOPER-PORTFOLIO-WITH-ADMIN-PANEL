"use client";

import AddExperienceInputCard from "@/components/admin-panel/AddExperienceInputCard";

import { getSingleExperience } from "../../../../../libs/data";
import React, { useEffect, useState } from "react";

const EditExperiencePage = ({ params }) => {
  const [experience, setExperience] = useState("");
  const _id = params;

  useEffect(() => {
    getSingleExperience(_id)
      .then((data) => JSON.parse(data))
      .then((data) => {
        setExperience(data.experience);
      });
  }, [_id]);

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

export default EditExperiencePage;
