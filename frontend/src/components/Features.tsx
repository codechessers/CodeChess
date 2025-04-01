import React from "react";
import { BentoFeatures } from "./BentoFeatures";
import ParticleBackground from "./ParticleBackground";

const Features = () => {
  return (
    <div className="w-full min-h-screen">
      <ParticleBackground />
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-bold bg-gradient-to-t from-gray-300 via-[#b1ff14ea] to-[#b2ff14] text-transparent bg-clip-text mb-4">
            Battle-Tested Features
          </h2>
          <p className="text-xl text-gray-300">
            Experience the thrill of competitive coding like never before
          </p>
        </div>
        <BentoFeatures />
      </div>
    </div>
  );
};

export default Features;
