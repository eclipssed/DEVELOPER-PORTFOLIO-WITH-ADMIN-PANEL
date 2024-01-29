"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createSkill, updateSkill } from "../../libs/admin-panel/actions";
import SaveButton from "./SaveButton";

const AddSkillInputCard = ({
  edit_id,
  editSkill,
  setEditSkill,
  addSkill,
  setAddSkill,
}) => {
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (edit_id) {
      setIsEdit(true);
    }
  }, [edit_id]);

  const handleSetAddSkill = (e) => {
    setAddSkill(e.target.value);
  };
  const handleSetEditSkill = (e) => {
    setEditSkill(e.target.value);
  };
  // ADD SKILL
  const handleCreateSkill = async () => {
    try {
      await createSkill(addSkill);
      toast.success("successfully created new project.");
    } catch (error) {
      console.log("Error while creating project: ", error);
      toast.error("Error while creating project.");
    }
    setLoading(false);
  };
  // UPDATE SKILL
  const handleUpdateSkill = async () => {
    try {
      await updateSkill(edit_id, editSkill);
      toast.success("successfully updated skill.");
    } catch (error) {
      console.log("Error while updating skill: ", error);
      toast.error("Error while updating skill.");
    }
    setLoading(false);
  };

  return (
    <form
      action={isEdit ? handleUpdateSkill : handleCreateSkill}
      onSubmit={() => setLoading(true)}
      className="flex justify-between items-center border-2 border-primary rounded-lg p-6 "
    >
      <div>
        <label className="font-bold text-xl">Skill</label>
        <input
          value={isEdit ? editSkill : addSkill}
          onChange={isEdit ? handleSetEditSkill : handleSetAddSkill}
          type="text"
          className="border-2 mx-4 border-primary p-4 rounded-lg"
          placeholder="Javascript"
        />
      </div>
      <SaveButton loading={loading} />
    </form>
  );
};

export default AddSkillInputCard;
