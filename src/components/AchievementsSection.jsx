"use client";

import React from "react";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const AchievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    metric: "Clients",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "8",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "2",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16  xl:px-16">
      <div className="border-[#33353f] border rounded-md py-8 px-16 flex flex-col sm:flex-row gap-6 items-center justify-between">
        {AchievementsList.map((achievement, index) => (
          <>
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex items-center justify-center">
                <AnimatedNumbers
                  key={achievement.metric}
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.4,
                  })}
                  locale="en-US"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#adb7be] text-base">{achievement.metric}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
