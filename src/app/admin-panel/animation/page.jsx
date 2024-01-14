"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const animationPage = () => {
  const maxWords = 5;
  const [remainingWords, setRemainingWords] = useState(maxWords);
  const [animation, setAnimation] = useState({
    animeOne: "",
    animeTwo: "",
    animeThree: "",
    animeFour: "",
  });

  const fetchAnimationText = async () => {
    try {
      const res = await axios("/api/admin-panel/animation");
      const data = res.data?.[0];
      // console.log(data);
      setAnimation(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchAnimationText();
  }, []);

  const handleAnimationTextChange = (e) => {
    const inputText = e.target.value;
    const wordCount = inputText.trim().split(/\s+/).length;
    const wordsLeft = maxWords - wordCount;
    if (wordsLeft >= 0) {
      setAnimation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      setRemainingWords(wordsLeft);
    }
  };

  const handleAnimationTextUpload = async () => {
    try {
      if (
        !animation.animeOne ||
        !animation.animeTwo ||
        !animation.animeThree ||
        !animation.animeFour
      ) {
        toast.error("All fields are required.");
        return;
      }
      const textPromise = new Promise(async (resolve, reject) => {
        const res = await axios.put("/api/admin-panel/animation", animation);
        if (res.data.status === 200) {
          fetchAnimationText();
          resolve();
        } else reject();
      });
      await toast.promise(textPromise, {
        loading: "Updating animation...",
        success: "Successfully updated the animation.",
        error: "Couldn't update the animation.",
      });
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="flex flex-col gap-4 rounded-lg wrapper">
      <div className="border-2 border-secondary rounded-lg p-4">
        <label className="animation-2xl font-bold animation-black">
          First Animation Text
        </label>
        <input
          required
          onChange={handleAnimationTextChange}
          value={animation.animeOne}
          name="animeOne"
          className="py-4 px-2 w-full rounded-lg border-2 my-4 mx-auto border-primary"
          type="animation"
          placeholder="Enter first animation text here..."
        />
      </div>
      <div className="border-2 border-secondary rounded-lg p-4">
        <label className="animation-2xl font-bold mx-4 animation-black">
          Second Animation Text
        </label>
        <input
          required
          onChange={handleAnimationTextChange}
          value={animation.animeTwo}
          name="animeTwo"
          placeholder="Enter two animation text here..."
          className="py-4 px-2 w-full rounded-lg border-2 my-4 mx-auto border-primary"
        ></input>
        <p className="font font-semibold">Words Left: {remainingWords}</p>
      </div>
      <div className="border-2 border-secondary rounded-lg p-4">
        <label className="animation-2xl font-bold mx-4 animation-black">
          Third Animation Text
        </label>
        <input
          required
          onChange={handleAnimationTextChange}
          value={animation.animeThree}
          name="animeThree"
          placeholder="Enter three animation text here..."
          className="py-4 px-2 w-full rounded-lg border-2 my-4 mx-auto border-primary"
        ></input>
        <p className="font font-semibold">Words Left: {remainingWords}</p>
      </div>
      <div className="border-2 border-secondary rounded-lg p-4">
        <label className="animation-2xl font-bold mx-4 animation-black">
          Four Animation Text
        </label>
        <input
          required
          onChange={handleAnimationTextChange}
          value={animation.animeFour}
          name="animeFour"
          placeholder="Enter four animation text here..."
          className="py-4 px-2 w-full rounded-lg border-2 my-4 mx-auto border-primary"
        ></input>
        <p className="font font-semibold">Words Left: {remainingWords}</p>
      </div>
      <div>
        <button onClick={handleAnimationTextUpload} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default animationPage;
