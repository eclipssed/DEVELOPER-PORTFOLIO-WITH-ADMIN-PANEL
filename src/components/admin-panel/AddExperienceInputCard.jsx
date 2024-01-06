"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddExperienceInputCard = ({
  edit_id,
  editExperience,
  setEditExperience,
  addExperience,
  setAddExperience,
  handleAddExperience,
}) => {
  const router = useRouter();
  const handleSetAddSkill = (e) => {
    setAddExperience(e.target.value);
  };
  const handleSetEditExperience = (e) => {
    setEditExperience(e.target.value);
  };
  const handleEditExperience = async () => {
    try {
      const res = await axios.put("/api/admin-panel/experience/edit", {
        edit_id,
        editExperience,
      });
      if (res.data.status === 200) {
        toast.success(res.data.message);
        router.push("/admin-panel/experience");
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
          Experience
        </label>
        <input
          value={editExperience ? editExperience : addExperience}
          onChange={
            editExperience ? handleSetEditExperience : handleSetAddSkill
          }
          type="text"
          className="border-2 w-full border-primary p-4 rounded-lg"
          placeholder="Frontend Developer, ABC Corporation, 20XX - 20XX"
        />
      </div>
      <div className="space-x-2">
        <button
          onClick={editExperience ? handleEditExperience : handleAddExperience}
          className="btn"
        >
          {editExperience ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddExperienceInputCard;
