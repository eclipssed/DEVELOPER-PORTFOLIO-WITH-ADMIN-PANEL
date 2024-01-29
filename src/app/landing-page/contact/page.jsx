"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { sendEmail } from "@/libs/landing-page/actions";
import { useInView } from "framer-motion";
import { MotionDiv } from "../../../components/MotionDiv";
import toast from "react-hot-toast";
import { getLinks, getText } from "@/libs/data";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [contactText, setContactText] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    github: "",
    linkedin: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const textRef = useRef(null);
  const formInView = useInView(formRef, { once: true });
  const textInView = useInView(textRef, { once: true });

  useEffect(() => {
    getLinks()
      .then((data) => JSON.parse(data))
      .then((data) => setSocialLinks({ ...data }));
    getText()
      .then((data) => JSON.parse(data))
      .then((data) => setContactText(data.contact));
  });

  const textVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  const formVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  const handleSendEmail = async () => {
    try {
      const res = await sendEmail(formData);
      if (res) {
        toast.success("Successfully send email.");
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("Error while submitting sendEmail form: ", error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12  py-24 gap-4 relative"
    >
      <div className="bg-gradient-radial from-secondary to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <MotionDiv
        ref={textRef}
        variants={textVariants}
        initial="initial"
        animate={textInView ? "animate" : "initial"}
        transition={{
          duration: 1.5,
        }}
      >
        <h5 className="text-xl font-bold text-white my-2 z-10">
          Let's connect
        </h5>
        <p className="text-light mb-4 max-w-md">{contactText}</p>
        <div className="socials flex gap-2">
          <Link href={socialLinks?.github}>
            <div className="group h-10 w-10 bg-white text-black relative rounded-full hover:bg-secondary hover:text-white duration-200 ease-linear">
              <FaGithub className="h-6 w-6 z-10 group-hover:text-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
          </Link>
          <Link href={socialLinks?.linkedin}>
            <div className="group h-10 w-10 bg-white text-black relative rounded-full hover:bg-secondary duration-200 ease-linear hover:text-white-white">
              <FaLinkedin className="h-6 w-6 z-10 group-hover:text-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>
          </Link>
        </div>
      </MotionDiv>
      <MotionDiv
        ref={formRef}
        variants={formVariants}
        initial="initial"
        animate={formInView ? "animate" : "initial"}
        transition={{ duration: 1.5 }}
      >
        <form
          className="flex flex-col gap-4 z-10"
          action={handleSendEmail}
          onSubmit={() => setLoading(true)}
        >
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
            className="input"
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
            className="input"
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
            rows={6}
            required
            className="input overflow-y-scroll scrollbar-thumb-primary scrollbar-track-dark scrollbar-thin scrollbar-track-rounded scrollbar-thumb-rounded"
            placeholder="Let's discuss a Billion dollars project."
          />

          <button
            disabled={loading ? true : false}
            className={`${
              loading
                ? "!bg-slate-500"
                : "bg-gradient-to-br hover:bg-gradient-to-br font-semibold hover:from-secondary hover:to-secondary from-primary to-secondary "
            } ease-linear duration-200 rounded-lg py-2.5 px-5 text-center `}
            type="submit"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </MotionDiv>
    </section>
  );
};

export default EmailSection;
