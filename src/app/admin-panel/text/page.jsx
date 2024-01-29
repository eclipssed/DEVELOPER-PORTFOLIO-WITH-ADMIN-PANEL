"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getText } from "../../../libs/data";
import { updateText } from "@/libs/admin-panel/actions";
import SaveButton from "@/components/admin-panel/SaveButton";

const page = () => {
  const maxWords = 100;
  const [remainingWords, setRemainingWords] = useState({
    hero: maxWords,
    about: maxWords,
    contact: maxWords,
  });
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState({
    logo: "",
    hero: "",
    about: "",
    contact: "",
  });

  useEffect(() => {
    getText()
      .then((data) => JSON.parse(data))
      .then((data) => setText(data));
  }, []);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    const wordCount = inputText.trim().split(/\s+/).length;
    const wordsLeft = maxWords - wordCount;
    if (wordsLeft >= 0) {
      setText((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      setRemainingWords((prev) => ({ ...prev, [e.target.name]: wordsLeft }));
    }
  };

  const handleTextUpdate = async () => {
    try {
      const res = await updateText(text);
      if (res) {
        toast.success("Successfully updated textFields.");
        getText()
          .then((data) => JSON.parse(data))
          .then((data) => setText(data));
      }
    } catch (error) {
      console.log("Error while updating textFields: ", error);
      toast.error("Error while updating textFields.");
    }
    setLoading(false);
  };
  return (
    <form
      action={handleTextUpdate}
      onSubmit={() => setLoading(true)}
      className="flex flex-col gap-4 rounded-lg wrapper"
    >
      <div className="border-2 border-secondary rounded-lg p-4">
        <label className="text-2xl font-bold text-black">
          Navbar Logo Text
        </label>
        <input
          required
          onChange={handleTextChange}
          value={text.logo}
          name="logo"
          className="py-4 px-2 rounded-lg border-2 mx-4 border-primary"
          type="text"
          placeholder="enter Nav logo text here..."
        />
      </div>
      <div className="border-2 border-secondary rounded-lg p-4">
        <label className="text-2xl font-bold mx-4 text-black">Hero Text</label>
        <textarea
          required
          onChange={handleTextChange}
          value={text.hero}
          name="hero"
          placeholder="enter your about text here..."
          className="py-4 px-2 w-full rounded-lg border-2 my-4 mx-auto border-primary"
          rows="10"
        ></textarea>
        <p className="font font-semibold">Words Left: {remainingWords.hero}</p>
      </div>
      <div className="border-2 border-secondary rounded-lg p-4">
        <label className="text-2xl font-bold mx-4 text-black">About Text</label>
        <textarea
          required
          onChange={handleTextChange}
          value={text.about}
          name="about"
          placeholder="enter your about text here... "
          className="py-4 px-2 w-full rounded-lg border-2 my-4 mx-auto border-primary"
          rows="10"
        ></textarea>
        <p className="font font-semibold">Words Left: {remainingWords.about}</p>
      </div>
      <div className="border-2 border-secondary rounded-lg p-4">
        <label className="text-2xl font-bold mx-4 text-black">
          Contact Text
        </label>
        <textarea
          required
          onChange={handleTextChange}
          value={text.contact}
          name="contact"
          placeholder="enter your contact text here... "
          className="py-4 px-2 w-full rounded-lg border-2 my-4 mx-auto border-primary"
          rows="10"
        ></textarea>
        <p className="font font-semibold">
          Words Left: {remainingWords.contact}
        </p>
      </div>
      <SaveButton loading={loading} />
    </form>
  );
};

export default page;
