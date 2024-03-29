"use client";

import AddSkillInputCard from "../../../../components/admin-panel/AddSkillInputCard";
import React, { useState } from "react";

const NewSkillsPage = () => {
  const [skill, setSkill] = useState("");

  return (
    <section className="wrapper">
      <AddSkillInputCard addSkill={skill} setAddSkill={setSkill} />
    </section>
  );
};

export default NewSkillsPage;
