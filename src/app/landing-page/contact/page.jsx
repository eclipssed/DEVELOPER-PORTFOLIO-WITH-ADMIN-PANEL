"use client";

import React, { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import { useInView, motion } from "framer-motion";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null);
  const textRef = useRef(null);
  const formInView = useInView(formRef, { once: true });
  const textInView = useInView(textRef, { once: true });

  const textVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  const formVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const emailPromise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/landing-page/send/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Conetent-Type": "application/json" },
      });
      if (res.ok) {
        resolve();
      } else reject();
    });
    await toast.promise(emailPromise, {
      loading: "Sending email...",
      success: "Successfully sent email.",
      error: "Couldn't sent email.",
    });
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12  py-24 gap-4 relative"
    >
      <div className="bg-gradient-radial from-secondary to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <motion.div
        ref={textRef}
        variants={textVariants}
        initial="initial"
        animate={textInView ? "animate" : "initial"}
        transition={{ duration: 1.5 }}
      >
        <h5 className="text-xl font-bold text-white my-2 z-10">
          Let's connect
        </h5>
        <p className="text-light mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex gap-2">
          <Link href={"https://github.com/eclipssed"}>
            <div className="group h-10 w-10 bg-white text-black relative rounded-full hover:bg-secondary hover:text-white duration-200 ease-linear">
              <FaGithub className="h-6 w-6 z-10 group-hover:text-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/muhammad-furqan-nextjs-developer/"
            }
          >
            <div className="group h-10 w-10 bg-white text-black relative rounded-full hover:bg-secondary duration-200 ease-linear hover:text-white-white">
              <FaLinkedin className="h-6 w-6 z-10 group-hover:text-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
          </Link>
        </div>
      </motion.div>
      <motion.div
        ref={formRef}
        variants={formVariants}
        initial="initial"
        animate={formInView ? "animate" : "initial"}
        transition={{ duration: 1.5 }}
      >
        <form className="flex flex-col gap-4 z-10" onSubmit={handleFormSubmit}>
          <label
            htmlFor="email"
            className="text-white block -mb-2 font-semibold text-sm"
          >
            Your email
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            required
            id="email"
            className="bg-[#18191e] boder boder-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block  w-full p-2.5"
            placeholder="jacob@gmail.com"
          />
          <label
            htmlFor="subject"
            className="text-white block -mb-2 font-semibold text-sm"
          >
            Subject
          </label>
          <input
            value={formData.subject}
            onChange={handleChange}
            name="subject"
            type="text"
            required
            id="subject"
            className="bg-[#18191e] boder boder-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block  w-full p-2.5"
            placeholder="Just saying hi"
          />
          <label
            htmlFor="message"
            className="text-white block -mb-2 font-semibold text-sm"
          >
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            type="text"
            required
            rows={6}
            id="message"
            className="bg-[#18191e] boder boder-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block  w-full p-2.5"
            placeholder="Let's talk about..."
          />

          <button
            className="bg-gradient-to-br hover:bg-gradient-to-br font-semibold hover:from-secondary hover:to-secondary from-primary to-secondary ease-linear duration-200 rounded-lg py-2.5 px-5 text-center"
            type="submit"
          >
            Send message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default EmailSection;
