import Link from "next/link";
import React from "react";

const EditEducationInputCard = ({ _id, education, handleDelete }) => {
  return (
    <div className="flex my-2 justify-between items-center border-2 border-primary rounded-lg p-6 ">
      <div className="flex gap-4 items-center">
        <h2 className="font-bold text-xl">{education}</h2>
      </div>
      <div className="space-x-2">
        <Link href={"/admin-panel/education/edit/" + _id}>
          <button className="btn">Edit</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditEducationInputCard;
