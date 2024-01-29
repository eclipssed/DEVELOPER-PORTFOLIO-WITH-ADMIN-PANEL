"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createEducation,
  updateEducation,
} from "../../libs/admin-panel/actions";
import SaveButton from "./SaveButton";

const AddEducationInputCard = ({
  edit_id,
  editEducation,
  setEditEducation,
  addEducation,
  setAddEducation,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (edit_id) {
      setIsEdit(true);
    }
  }, [edit_id]);
  const router = useRouter();
  const handleSetAddSkill = (e) => {
    setAddEducation(e.target.value);
  };
  const handleSetEditEduction = (e) => {
    setEditEducation(e.target.value);
  };
  // ADD EDUCATION
  const handleCreateEducation = async () => {
    try {
      await createEducation(addEducation);
      toast.success("successfully created new education.");
    } catch (error) {
      console.log("Error while creating education: ", error);
      toast.error("Error while creating education.");
    }
    setLoading(false);
  };

  // UPDATE EDUCATION
  const handleUpdateEducation = async () => {
    try {
      await updateEducation(edit_id, editEducation);
      toast.success("successfully updated education.");
    } catch (error) {
      console.log("Error while updating education: ", error);
      toast.error("Error while updating education.");
    }
    setLoading(false);
  };

  return (
    <form
      action={isEdit ? handleUpdateEducation : handleCreateEducation}
      onSubmit={() => setLoading(true)}
      className="flex justify-between items-center border-2 border-primary rounded-lg p-6 "
    >
      <div>
        <label className="font-bold text-xl">Education</label>
        <input
          value={isEdit ? editEducation : addEducation}
          onChange={isEdit ? handleSetEditEduction : handleSetAddSkill}
          type="text"
          className="border-2 w-full border-primary p-4 rounded-lg"
          placeholder="Bachelor of Science in Computer Science, XYZ University, 20XX"
        />
      </div>
      <SaveButton loading={loading} />
    </form>
  );
};

export default AddEducationInputCard;
