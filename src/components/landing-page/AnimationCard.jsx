import React from "react";
import { TypeAnimation } from "react-type-animation";

const fetchAnimation = async () => {
  try {
    const response = await fetch("/api/admin-panel/animation");
    const res = await response.json();
    const data = res[0];
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

const AnimationCard = async () => {
  const animation = await fetchAnimation();

  console.log(animation);

  //   const animeOne = animation.animeOne;
  //   const animeTwo = animation.animeTwo;
  //   const animeThree = animation.animeThree;
  //   const animeFour = animation.animeFour;

  return (
    <div>
      <TypeAnimation
        sequence={[
          animeOne,
          1000,
          animeTwo,
          1000,
          animeThree,
          1000,
          animeFour,
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
