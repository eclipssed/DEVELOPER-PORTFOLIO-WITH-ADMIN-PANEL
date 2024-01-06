"use client";

import AddSkillInputCard from "../../../../../components/admin-panel/AddSkillInputCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [skill, setSkill] = useState("");
  const _id = params;

  const fetchSkill = async () => {
    const res = await axios.put("/api/admin-panel/skills", { _id });
    setSkill(res.data.skill.skill);
  };
  useEffect(() => {
    fetchSkill();
  }, []);

  return (
    <section className="wrapper">
      <AddSkillInputCard
        edit_id={_id}
        editSkill={skill}
        setEditSkill={setSkill}
      />
    </section>
  );
};

export default page;
