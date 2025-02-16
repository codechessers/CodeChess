import React from "react";
// import { Button } from "@/components/ui/button";
import { Button } from "./ui/moving-border";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 mb-10 py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center justify-center">
          <div className="space-y-4 text-center max-w-8xl">
            <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl bg-gradient-to-t from-gray-300 via-[#b1ff14ea] to-[#b2ff14] bg-clip-text text-transparent z-10">
              Code. Challenge. Conquer.
            </h1>
            <p className="mx-auto max-w-full text-gray-200 text-lg sm:text-xl md:text-2xl">
              Challenge yourself and others in thrilling coding competitions.
              Solve problems, outsmart opponents, and climb the global rankings
              as you test your programming skills in head-to-head battles.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
            <Button
  className="bg-black text-[#b2ff14] text-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#b2ff14] hover:text-black hover:bg-[#b2ff14]"
  borderRadius="1.01rem"
>
  Play Now
</Button>

            </div>
            {/* <div>
              <Button
                className="text-base border border-black sm:text-lg md:text-xl w-full sm:w-auto py-7 px-10 bg-[#b2ff14] text-black hover:bg-[#9bd12e]"
              >
                How To Play
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
