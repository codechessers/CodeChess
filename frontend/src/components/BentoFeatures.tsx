import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconBolt,
  IconChartBar,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconStairs,
  IconSwords,
  IconTableColumn,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl 
    bg-gradient-to-br from-neutral-900/50 to-neutral-900/20
    backdrop-blur-xl border border-white/10
    dark:bg-dot-white/[0.2] bg-dot-black/[0.2]
    [mask-image:radial-gradient(ellipse_at_center,white,transparent)]
    relative overflow-hidden">
    <div className="absolute inset-0 "></div>
  </div>
);

const items = [
    {
      title: "Real-time Coding Battles",
      description: "Challenge opponents to intense 1v1 coding duels. Write, compile and execute code in real-time head-to-head matches.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconSwords className="h-4 w-4 text-white/70" />,
    },
    {
      title: "Difficulty Levels",
      description: "Choose your challenge level - Easy for beginners, Medium for experienced coders, Hard for programming masters.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconStairs className="h-4 w-4 text-white/70" />,
    },
    {
      title: "Instant Feedback",
      description: "Get immediate results on your code execution, test cases, and performance metrics to improve your skills.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconBolt className="h-4 w-4 text-white/70" />,
    },
    {
      title: "Progress Tracking",
      description: "Monitor your performance, track win rates, and climb the global leaderboard as you master coding challenges.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconChartBar className="h-4 w-4 text-white/70" />,
    },
  ];
  

export function BentoFeatures() {
  return (
    <div className="min-h-screen">
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] p-8 gap-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={<div className="text-white">{item.title}</div>} 
            description={<div className="text-white">{item.description}</div>} 
            header={item.header}
            className={cn(
              "group/bento hover:shadow-2xl transition-all duration-300",
              "bg-gradient-to-br from-neutral-900/50 to-neutral-900/20",
              "backdrop-filter backdrop-blur-xl border border-[#b2ff14]/30",
              "rounded-3xl overflow-hidden",
              "hover:border-[#b2ff14]/50 hover:bg-neutral-900/40",
              item.className
            )}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}