import React from "react";

const SaveButton = ({ loading }) => {
  return (
    <div>
      <button
        disabled={loading ? true : false}
        type="submit"
        className={`btn ${loading ? "!bg-slate-500" : ""}`}
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default SaveButton;
