"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { WavyBackground } from "@/components/ui/wavy-background";
export default function Home() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_420px,#38461b,transparent)] bg-black flex flex-col max-h-screen font-cairoli">
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
    </div>
  );
}
