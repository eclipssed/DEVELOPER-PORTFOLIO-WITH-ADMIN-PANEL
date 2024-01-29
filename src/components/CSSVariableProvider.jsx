"use client";

import { useEffect, useState } from "react";
import { getColors } from "@/libs/data";

const CSSVariableProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState({
    _id: "",
    primary: "",
    secondary: "",
    dark: "",
    light: "",
  });

  const updateCSSVariables = () => {
    const root = document.documentElement;
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty("--dark", colors.dark);
    root.style.setProperty("--light", colors.light);
    setLoading(false);
  };

  useEffect(() => {
    getColors()
      .then((data) => JSON.parse(data))
      .then((data) => setColors(data))
      .then(() => updateCSSVariables())
      .catch((err) => console.log(err));
  }, [updateCSSVariables]);

  // console.log(colors);
  if (loading) {
    return;
  }
  return <div>{children}</div>;
};

export default CSSVariableProvider;
