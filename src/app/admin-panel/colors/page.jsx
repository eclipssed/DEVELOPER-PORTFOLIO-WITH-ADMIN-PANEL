"use client";

import React, { useEffect, useState } from "react";
import ColorPickerInput from '../../../components/admin-panel/ColorPickerInput'
import axios from "axios";
import toast from "react-hot-toast";

const colorsPage = () => {
  const [currentColor, setcurrentColor] = useState({
    primary: "#fff",
    secondary: "#fff",
    dark: "#fff",
    light: "#fff",
  });
  const fetchColors = async () => {
    const res = await axios.get("/api/admin-panel/colors");
    const fetchedColors = res.data[0];
    setcurrentColor((prev) => ({ ...prev, ...fetchedColors }));
    return res;
  };
  useEffect(() => {
    fetchColors();
  }, []);

  const handleColorChange = (e) => {
    setcurrentColor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleColorsUpdate = async () => {
    try {
      const colorsPromise = new Promise(async (resolve, reject) => {
        const res = await axios.put("/api/admin-panel/colors", currentColor);
        if (res.data.status === 200) {
          resolve();
        } else reject();
      });
      await toast.promise(colorsPromise, {
        loading: "Updating colors...",
        success: "Successfully updated colors",
        error: "Couldn't update colors.",
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="space-y-4 wrapper">
      <div className="grid grid-cols-2 border rounded-lg py-2 px-4">
        <ColorPickerInput
          handleColorChange={handleColorChange}
          currentColor={currentColor.primary}
          title={"Primary Color"}
          name={"primary"}
        />
        <ColorPickerInput
          handleColorChange={handleColorChange}
          currentColor={currentColor.secondary}
          title={"Secondary Color"}
          name={"secondary"}
        />
        <ColorPickerInput
          handleColorChange={handleColorChange}
          currentColor={currentColor.dark}
          title={"Dark Color"}
          name={"dark"}
        />
        <ColorPickerInput
          handleColorChange={handleColorChange}
          currentColor={currentColor.light}
          title={"Light Color"}
          name={"light"}
        />
      </div>
      <button onClick={handleColorsUpdate} className="btn">
        Save
      </button>
    </section>
  );
};

export default colorsPage;
