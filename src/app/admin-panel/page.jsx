"use client";

import "./globals.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
const page = () => {
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
    <section className="wrapper">
      <h2 className="font-bold">Home page</h2>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
};

export default page;
