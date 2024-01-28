"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post("/api/login", loginData);
    // console.log(res);
    if (res.data.status === 200) {
      toast.success("login successfull.");
      router.push("/admin-panel/dashboard");
    } else {
      toast.error(res.data.message);
    }
    setLoading(false);
  };
  return (
    <section className="max-w-lg mx-auto flex justify-center items-center min-h-screen">
      <div className=" flex flex-col justify-center items-center bg-slate-900  rounded-lg text-white py-6 px-4">
        <h2 className="font-bold text-xl mb-4 ">Login</h2>
        <form onSubmit={handleAdminLogin} className="flex flex-col gap-2">
          <input
            className="input"
            type="text"
            required
            onChange={handleChange}
            name="username"
            placeholder="username"
          />
          <input
            className="input"
            type="text"
            required
            onChange={handleChange}
            name="email"
            placeholder="email"
          />
          <input
            className="input"
            type="password"
            required
            onChange={handleChange}
            name="password"
            placeholder="password"
          />
          <button
            type="submit"
            className="btn rounded-lg py-2 font-bold !bg-primary"
          >
            {loading ? "logging in..." : "login"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
