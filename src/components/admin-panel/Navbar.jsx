"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await axios("/api/logout");
      if (res.data.status === 200) {
        toast.success("logout successfull.");
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="h-40 sticky top-0 bg-white z-10 text-black flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Web Developer Portfolio</h2>
      <button className="btn mt-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
