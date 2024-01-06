"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEducationInputCard from "../../../../../components/admin-panel/AddEducationInputCard";

const page = ({ params }) => {
  const [education, setEducation] = useState("");
  const _id = params;

  const fetchEducation = async () => {
    const res = await axios.put("/api/admin-panel/education", { _id });
    setEducation(res.data.education.education);
  };
  useEffect(() => {
    fetchEducation();
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
