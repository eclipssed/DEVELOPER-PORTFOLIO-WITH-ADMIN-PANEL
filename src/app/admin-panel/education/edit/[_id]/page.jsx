"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEducationInputCard from "../../../../../components/admin-panel/AddEducationInputCard";
import { getSingleEducation } from "@/libs/data";

const EditEducationPage = ({ params }) => {
  const [education, setEducation] = useState("");
  const _id = params;

  useEffect(() => {
    getSingleEducation(_id)
      .then((data) => JSON.parse(data))
      .then((data) => {
        setEducation(data.education);
      });
  }, [_id]);

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

export default EditEducationPage;
