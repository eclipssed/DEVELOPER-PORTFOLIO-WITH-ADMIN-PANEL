import React from "react";

const ProjectFormInput = ({ onChange, value, title, name }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="">{title}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        className="input -mt-2"
        type="text"
        placeholder={
          title === "Tags"
            ? "Enter tags separated by a comma ( all, vanilla, react.js, next.js etc...)"
            : `Enter your project ${title} here...`
        }
      />
    </div>
  );
};

export default ProjectFormInput;
