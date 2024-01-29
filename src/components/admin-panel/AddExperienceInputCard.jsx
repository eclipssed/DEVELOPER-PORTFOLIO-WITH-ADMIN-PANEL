"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createExperience,
  updateExperience,
} from "../../libs/admin-panel/actions";
import SaveButton from "../../components/admin-panel/SaveButton";

const AddExperienceInputCard = ({
  edit_id,
  editExperience,
  setEditExperience,
  addExperience,
  setAddExperience,
}) => {
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (edit_id) {
      setIsEdit(true);
    }
  }, [edit_id]);
  const handleSetAddSkill = (e) => {
    setAddExperience(e.target.value);
  };
  const handleSetEditExperience = (e) => {
    setEditExperience(e.target.value);
  };
  // ADD EXPERIENCE
  const handleCreateExperience = async () => {
    try {
      await createExperience(addExperience);
      toast.success("successfully created new experience.");
    } catch (error) {
      console.log("Error while creating experience: ", error);
      toast.error("Error while creating experience.");
    }
    setLoading(false);
  };

  // UPDATE EXPERIENCE
  const handleUpdateExperience = async () => {
    try {
      await updateExperience(edit_id, editExperience);
      toast.success("successfully updated experience.");
    } catch (error) {
      console.log("Error while updating experience: ", error);
      toast.error("Error while updating experience.");
    }
    setLoading(false);
  };
  return (
    <form
      action={isEdit ? handleUpdateExperience : handleCreateExperience}
      onSubmit={() => setLoading(true)}
      className="flex justify-between items-center border-2 border-primary rounded-lg p-6 "
    >
      <div className="">
        <label htmlFor="" className="font-bold text-xl">
          Experience
        </label>
        <input
          value={isEdit ? editExperience : addExperience}
          onChange={isEdit ? handleSetEditExperience : handleSetAddSkill}
          type="text"
          className="border-2 w-full border-primary p-4 rounded-lg"
          placeholder="Frontend Developer, ABC Corporation, 20XX - 20XX"
        />
      </div>
      <SaveButton loading={loading} />
    </form>
  );
};

export default AddExperienceInputCard;
