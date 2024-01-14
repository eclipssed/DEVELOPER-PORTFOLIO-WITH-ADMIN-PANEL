"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimationCard = ({ animation }) => {
  return (
    <div className="text-white">
      <TypeAnimation
        sequence={[
          animation.animeOne,
          1000,
          animation.animeTwo,
          1000,
          animation.animeThree,
          1000,
          animation.animeFour,
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default AnimationCard;
