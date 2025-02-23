"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { WavyBackground } from "@/components/ui/wavy-background";
export default function Home() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col max-h-screen font-cairoli bg-black [background-image:radial-gradient(circle_500px_at_50%_420px,#38461b,transparent),linear-gradient(rgba(178,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(178,255,20,0.05)_1px,transparent_1px)] [background-size:100%_100%,50px_50px,50px_50px]">
      <Header />
      <MaxWidthWrapper>
        <div className="relative flex items-center justify-center">
          <Hero />
        </div>
      </MaxWidthWrapper>
      <div className="relative flex items-center justify-center">
        <WavyBackground>
          <Features />
        </WavyBackground>
      </div>
      <MaxWidthWrapper>
        <HowItWorks />
      </MaxWidthWrapper>
    </div>
  );
}
