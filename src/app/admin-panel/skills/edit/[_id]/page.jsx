"use client";

import { getSingleSkill } from "@/libs/data";
import AddSkillInputCard from "../../../../../components/admin-panel/AddSkillInputCard";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [skill, setSkill] = useState();
  const _id = params;

  useEffect(() => {
    getSingleSkill(_id)
      .then((data) => JSON.parse(data))
      .then((data) => {
        setSkill(data.skill);
      });
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
