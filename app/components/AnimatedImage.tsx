"use client";
import Lottie from "lottie-react";
import React from "react";
import animationData from "../data/animate.json";
const AnimatedImage = ({ data, className }: { data?: any; className?: string }) => {
  return (
    <div className={`${className || "max-w-[50%]"}`}>
      <Lottie animationData={data || animationData} />
    </div>
  );
};

export default AnimatedImage;
