"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEducationInputCard from "../../../../../components/admin-panel/AddEducationInputCard";
import { getSingleEducation } from "@/libs/data";

const page = ({ params }) => {
  const [education, setEducation] = useState("");
  const _id = params;

  useEffect(() => {
    getSingleEducation(_id)
      .then((data) => JSON.parse(data))
      .then((data) => {
        setEducation(data.education);
      });
  }, []);

  return (
    <section className="wrapper">
      <AddEducationInputCard
        edit_id={_id}
        editEducation={education}
        setEditEducation={setEducation}
      />
    </section>
  );
};

export default page;
