"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const textPage = () => {
  const maxWords = 100;
  const [remainingWords, setRemainingWords] = useState(maxWords);
  const [text, setText] = useState({
    logo: "",
    hero: "",
    about: "",
    contact: "",
  });

  const fetchText = async () => {
    try {
      const res = await axios("/api/admin-panel/text");
      const data = res.data?.[0];
      setText(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchText();
  }, []);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    const wordCount = inputText.trim().split(/\s+/).length;
    const wordsLeft = maxWords - wordCount;
    if (wordsLeft >= 0) {
      setText((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      setRemainingWords(wordsLeft);
    }
  };

  const handleTextUpload = async () => {
    try {
      if (!text.logo || !text.hero || !text.about || !text.contact) {
        toast.error("All fields are required.");
        return;
      }
      const textPromise = new Promise(async (resolve, reject) => {
        const res = await axios.put("/api/admin-panel/text", text);
        if (res.data.status === 200) {
          fetchText();
          resolve();
        } else reject();
      });
      await toast.promise(textPromise, {
        loading: "Updating text...",
        success: "Successfully updated the text.",
        error: "Couldn't update the text.",
      });
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="flex flex-col gap-4 rounded-lg wrapper">
      <div className="border-2 border-secondary rounded-lg p-4">
        <label className="text-2xl font-bold text-black">Nav Logo Text</label>
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
        <p className="font font-semibold">Words Left: {remainingWords}</p>
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
        <p className="font font-semibold">Words Left: {remainingWords}</p>
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
        <p className="font font-semibold">Words Left: {remainingWords}</p>
      </div>
      <div>
        <button onClick={handleTextUpload} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default textPage;
