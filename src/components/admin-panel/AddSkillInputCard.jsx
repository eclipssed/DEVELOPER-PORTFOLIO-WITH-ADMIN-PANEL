"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddSkillInputCard = ({
  edit_id,
  editSkill,
  setEditSkill,
  addSkill,
  setAddSkill,
  handleAddSkill,
}) => {
  const router = useRouter();
  const handleSetAddSkill = (e) => {
    setAddSkill(e.target.value);
  };
  const handleSetEditSkill = (e) => {
    setEditSkill(e.target.value);
  };
  const handleEditSkill = async () => {
    try {
      const res = await axios.put("/api/admin-panel/skills/edit", {
        edit_id,
        editSkill,
      });
      if (res.data.status === 200) {
        toast.success(res.data.message);
        router.push("/admin-panel/skills");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="flex justify-between items-center border-2 border-primary rounded-lg p-6 ">
      <div className="">
        <label htmlFor="" className="font-bold text-xl">
          Skill
        </label>
        <input
          value={editSkill ? editSkill : addSkill}
          onChange={editSkill ? handleSetEditSkill : handleSetAddSkill}
          type="text"
          className="border-2 mx-4 border-primary p-4 rounded-lg"
          placeholder="Javascript"
        />
      </div>
      <div className="space-x-2">
        <button
          onClick={editSkill ? handleEditSkill : handleAddSkill}
          className="btn"
        >
          {editSkill ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddSkillInputCard;
