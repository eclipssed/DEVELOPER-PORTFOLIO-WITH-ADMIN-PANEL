import React from "react";

const LinksCard = ({ linkTitle, onChange, value, name }) => {
  return (
    <div className="border-2 border-secondary rounded-lg p-4">
      <label className="text-2xl font-bold text-black">{linkTitle}</label>
      <input
        required
        onChange={onChange}
        value={value}
        name={name}
        className="py-4 px-2 rounded-lg border-2 mx-auto border-primary w-full"
        type="text"
        placeholder="Enter social link here..."
      />
    </div>
  );
};

export default LinksCard;
