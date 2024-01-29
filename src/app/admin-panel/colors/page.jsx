"use client";

import React, { useEffect, useState } from "react";
import ColorPickerInput from "../../../components/admin-panel/ColorPickerInput";
import { updateColors } from "@/libs/admin-panel/actions";
import toast from "react-hot-toast";
import { getColors } from "../../../libs/data";
import SaveButton from "@/components/admin-panel/SaveButton";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState({
    primary: "#fff",
    secondary: "#fff",
    dark: "#fff",
    light: "#fff",
  });

  useEffect(() => {
    getColors()
      .then((data) => JSON.parse(data))
      .then((data) => setColors(data));
  }, []);

  const handleColorChange = (e) => {
    setColors((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleColorsUpdate = async () => {
    try {
      const res = await updateColors(colors);
      if (res) {
        toast.success("Successfully updated colors.");
        getColors()
          .then((data) => JSON.parse(data))
          .then((data) => setColors(data));
      }
    } catch (error) {
      console.log("Error while updating colors: ", error);
      toast.error("Error while updating colors");
    }
    setLoading(false);
  };

  return (
    <section className="space-y-4 wrapper">
      <form
        action={handleColorsUpdate}
        onSubmit={() => setLoading(true)}
        className="grid grid-cols-2 border rounded-lg py-2 px-4"
      >
        <ColorPickerInput
          handleColorChange={handleColorChange}
          color={colors.primary}
          title={"Primary Color"}
          name={"primary"}
        />
        <ColorPickerInput
          handleColorChange={handleColorChange}
          color={colors.secondary}
          title={"Secondary Color"}
          name={"secondary"}
        />
        <ColorPickerInput
          handleColorChange={handleColorChange}
          color={colors.dark}
          title={"Background Color"}
          name={"dark"}
        />
        <ColorPickerInput
          handleColorChange={handleColorChange}
          color={colors.light}
          title={"Text Color"}
          name={"light"}
        />
        <SaveButton loading={loading} />
        {/* <div>
          <button
            disabled={loading ? true : false}
            type="submit"
            className={`btn ${loading ? "!bg-slate-500" : ""}`}
          >
            {loading ? "Updating..." : "Save"}
          </button>
        </div> */}
      </form>
    </section>
  );
};

export default page;
