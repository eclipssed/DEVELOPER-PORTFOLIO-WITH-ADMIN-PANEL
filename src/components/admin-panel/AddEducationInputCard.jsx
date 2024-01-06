"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddEducationInputCard = ({
  edit_id,
  editEducation,
  setEditEducation,
  addEducation,
  setAddEducation,
  handleAddEducation,
}) => {
  const router = useRouter();
  const handleSetAddSkill = (e) => {
    setAddEducation(e.target.value);
  };
  const handleSetEditEduction = (e) => {
    setEditEducation(e.target.value);
  };
  const handleEditEducation = async () => {
    try {
      const res = await axios.put("/api/admin-panel/education/edit", {
        edit_id,
        editEducation,
      });
      if (res.data.status === 200) {
        toast.success(res.data.message);
        router.push("/admin-panel/education");
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
          Education
        </label>
        <input
          value={editEducation ? editEducation : addEducation}
          onChange={editEducation ? handleSetEditEduction : handleSetAddSkill}
          type="text"
          className="border-2 w-full border-primary p-4 rounded-lg"
          placeholder="Bachelor of Science in Computer Science, XYZ University, 20XX"
        />
      </div>
      <div className="space-x-2">
        <button
          onClick={editEducation ? handleEditEducation : handleAddEducation}
          className="btn"
        >
          {editEducation ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddEducationInputCard;
