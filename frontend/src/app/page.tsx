"use client";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main className="relative min-h-screen [background-image:radial-gradient(circle_500px_at_50%_420px,#38461b,transparent)]">
      <Header />
      <MaxWidthWrapper>
        <div className="relative flex items-center justify-center">
          <Hero />
        </div>
      </MaxWidthWrapper>
      <div className="relative flex items-center justify-center">
        <Features />
      </div>
      <div className="relative">
        <HowItWorks />
      </div>
      <Footer />
    </main>
  );
}
