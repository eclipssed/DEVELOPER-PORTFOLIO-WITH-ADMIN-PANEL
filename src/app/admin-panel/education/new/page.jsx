"use client";

import AddEducationInputCard from "@/components/admin-panel/AddEducationInputCard";
import React, { useState } from "react";

const page = () => {
  const [education, setEducation] = useState("");

  return (
    <section className="wrapper">
      <AddEducationInputCard
        addEducation={education}
        setAddEducation={setEducation}
      />
    </section>
  );
};

export default page;
