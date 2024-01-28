"use client";

import React from "react";
import WorldMap from "react-svg-worldmap";

//   const data = [
//     { country: "cn", value: 1389618778 }, // china
//     { country: "in", value: 1311559204 }, // india
//     { country: "us", value: 331883986 }, // united states
//     { country: "id", value: 264935824 }, // indonesia
//     { country: "pk", value: 210797836 }, // pakistan
//     { country: "br", value: 210301591 }, // brazil
//     { country: "ng", value: 208679114 }, // nigeria
//     { country: "bd", value: 161062905 }, // bangladesh
//     { country: "ru", value: 141944641 }, // russia
//     { country: "mx", value: 127318112 }, // mexico
//   ];
const WorldMapCard = ({ countries }) => {
  const data = countries.map((item) => {
    const { count, ...rest } = item;
    return { value: count, ...rest };
  });
  return (
    <div className="text-center mt-8">
      <h2 className="text-4xl font-bold">Top Countires Visitors</h2>
      <WorldMap
        tooltipBgColor="purple"
        color="green"
        valueSuffix="visitors"
        size="xxl"
        data={data}
        frameColor="purple"
      />
    </div>
  );
};

export default WorldMapCard;
