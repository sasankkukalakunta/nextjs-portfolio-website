"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";

export function SpotlightNewDemo() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Spotlight
  duration={22}       // slow Apple motion
  xOffset={420}       // very wide drift
  translateY={-180}   // light feels lifted
  width={1400}        // soft, wide halo
  height={2600}
  smallWidth={480}    // subtle accents
/>


    </div>
  );
}

export default SpotlightNewDemo;