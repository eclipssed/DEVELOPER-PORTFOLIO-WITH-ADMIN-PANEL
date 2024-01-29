"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAnimation } from "../../../libs/data";
import { updateAnimation } from "@/libs/admin-panel/actions";
import SaveButton from "@/components/admin-panel/SaveButton";

const page = () => {
  const maxWords = 5;
  const [loading, setLoading] = useState(false);
  const [remainingWords, setRemainingWords] = useState(maxWords);
  const [animation, setAnimation] = useState({
    animeOne: "",
    animeTwo: "",
    animeThree: "",
    animeFour: "",
  });

  useEffect(() => {
    getAnimation()
      .then((data) => JSON.parse(data))
      .then((data) => setAnimation(data));
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

  const handleAnimationUpdate = async () => {
    try {
      const res = await updateAnimation(animation);
      if (res) {
        toast.success("Successfully updated animation.");
        getAnimation()
          .then((data) => JSON.parse(data))
          .then((data) => setAnimation(data));
      }
    } catch (error) {
      console.log("Error while updating animation: ", error);
      toast.error("Error while updating animation.");
    }
    setLoading(false);
  };

  return (
    <form
      action={handleAnimationUpdate}
      onSubmit={() => setLoading(true)}
      className="flex flex-col gap-4 rounded-lg wrapper"
    >
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
      <SaveButton loading={loading} />
    </form>
  );
};

export default page;
