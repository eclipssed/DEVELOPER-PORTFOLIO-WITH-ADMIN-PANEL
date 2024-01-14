"use client";
import React, { useEffect, useState } from "react";
import Loading from "../app/loading";
import axios from "axios";

const CSSVariableProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState({
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
  const fetchColors = async () => {
    try {
      const res = await axios("/api/admin-panel/colors");
      const data = res.data[0];
      setColors((prev) => ({ ...prev, ...data }));
      updateCSSVariables();
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };
  useEffect(() => {
    fetchColors();
  }, [colors]);

  //   console.log(colors);

  if (loading) {
    return <Loading />;
  }
  return <div>{children}</div>;
};

export default CSSVariableProvider;
