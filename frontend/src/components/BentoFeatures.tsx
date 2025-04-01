"use client";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBolt,
  IconChartBar,
  IconStairs,
  IconSwords,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

// Code Battle Component
const CodeBattleVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#b2ff14]/10 to-transparent opacity-30"></div>

    {/* Left code editor */}
    <div className="w-[45%] h-[80%] bg-black/80 border border-[#b2ff14]/30 rounded-lg overflow-hidden mr-2 shadow-lg shadow-[#b2ff14]/10">
      <div className="h-6 bg-black/90 border-b border-[#b2ff14]/20 flex items-center px-2">
        <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <div className="text-xs text-gray-400 ml-2">player1.js</div>
      </div>
      <div className="p-3 font-mono text-xs text-left">
        <div className="text-gray-500">1</div>
        <div>
          <span className="text-purple-400">function</span>{" "}
          <span className="text-[#b2ff14]">findMax</span>
          <span className="text-gray-400">(</span>
          <span className="text-orange-300">arr</span>
          <span className="text-gray-400">)</span>{" "}
          <span className="text-gray-400">{"{"}</span>
        </div>
        <div className="ml-4">
          <span className="text-purple-400">let</span>{" "}
          <span className="text-blue-300">max</span>{" "}
          <span className="text-gray-400">=</span>{" "}
          <span className="text-orange-300">arr</span>
          <span className="text-gray-400">[</span>
          <span className="text-yellow-300">0</span>
          <span className="text-gray-400">];</span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1,
            repeatDelay: 1,
          }}
          className="ml-4 text-gray-400 border-r border-[#b2ff14] pr-1"
        >
          <span className="text-purple-400">for</span>
          <span className="text-gray-400">(</span>
          <span className="text-purple-400">let</span>{" "}
          <span className="text-blue-300">i</span>
          <span className="text-gray-400">=</span>
          <span className="text-yellow-300">1</span>
          <span className="text-gray-400">;</span>{" "}
          <span className="text-blue-300">i</span>
          <span className="text-gray-400"></span>
          <span className="text-orange-300">arr</span>
          <span className="text-gray-400">.</span>
          <span className="text-blue-300">length</span>
          <span className="text-gray-400">;</span>{" "}
          <span className="text-blue-300">i</span>
          <span className="text-gray-400">++)</span>
          <span className="text-gray-400">{" }"}</span>
        </motion.div>
      </div>
    </div>

    {/* VS badge */}
    <div className="absolute z-10 w-10 h-10 bg-[#b2ff14] rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-[#b2ff14]/30">
      VS
    </div>

    {/* Right code editor */}
    <div className="w-[45%] h-[80%] bg-black/80 border border-[#b2ff14]/30 rounded-lg overflow-hidden ml-2 shadow-lg shadow-[#b2ff14]/10">
      <div className="h-6 bg-black/90 border-b border-[#b2ff14]/20 flex items-center px-2">
        <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <div className="text-xs text-gray-400 ml-2">player2.js</div>
      </div>
      <div className="p-3 font-mono text-xs text-left">
        <div className="text-gray-500">1</div>
        <div>
          <span className="text-purple-400">function</span>{" "}
          <span className="text-[#b2ff14]">findMax</span>
          <span className="text-gray-400">(</span>
          <span className="text-orange-300">arr</span>
          <span className="text-gray-400">)</span>{" "}
          <span className="text-gray-400">{"{"}</span>
        </div>
        <div className="ml-4">
          <span className="text-purple-400">return</span>{" "}
          <span className="text-orange-300">Math</span>
          <span className="text-gray-400">.</span>
          <span className="text-[#b2ff14]">max</span>
          <span className="text-gray-400">(...</span>
          <span className="text-orange-300">arr</span>
          <span className="text-gray-400">);</span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1,
            repeatDelay: 1,
          }}
          className="text-gray-400 border-r border-[#b2ff14] pr-1"
        >
          <span className="text-gray-400">{"}"}</span>
        </motion.div>
      </div>
    </div>

    {/* Timer */}
    <div className="absolute bottom-4 bg-black/70 px-3 py-1 rounded-full border border-[#b2ff14]/40 text-[#b2ff14] text-sm font-mono">
      02:45
    </div>
  </div>
);

// Completely redesigned Difficulty Levels Component
const DifficultyLevelsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-[#b2ff14]/10 to-transparent opacity-30"></div>

    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full max-w-[90%] space-y-4">
        {/* Difficulty level cards - modern horizontal design */}
        {[
          {
            level: "Easy",
            color: "#b2ff14",
            complexity: "20%",
            time: "~5 min",
            example: "Array Manipulation",
            description: "Basic algorithms and data structures",
          },
          {
            level: "Medium",
            color: "#b2ff14",
            complexity: "50%",
            time: "~15 min",
            example: "Dynamic Programming",
            description: "Intermediate problem-solving techniques",
          },
          {
            level: "Hard",
            color: "#b2ff14",
            complexity: "80%",
            time: "~30 min",
            example: "Graph Algorithms",
            description: "Advanced algorithms and optimizations",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative bg-black/70 backdrop-blur-sm border border-[#b2ff14]/30 rounded-lg overflow-hidden group hover:border-[#b2ff14]/70 transition-all duration-300"
          >
            <div
              className="absolute top-0 left-0 h-full w-1 bg-[#b2ff14]"
              style={{ opacity: 0.3 + index * 0.3 }}
            ></div>

            <div className="flex items-center p-3">
              {/* Level indicator */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg bg-black/60 border border-[#b2ff14]/40 flex items-center justify-center mr-4"
                style={{ borderColor: `${item.color}${40 + index * 20}` }}
              >
                <span className="text-[#b2ff14] font-bold text-sm">
                  {item.level}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-[#b2ff14] font-medium text-sm">
                    {item.example}
                  </h4>
                  <span className="text-xs text-white/70">{item.time}</span>
                </div>

                <p className="text-white/80 text-xs mb-2">{item.description}</p>

                {/* Complexity bar */}
                <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.complexity }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.2 + index * 0.1,
                    }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}40 0%, ${item.color} 100%)`,
                      boxShadow: `0 0 10px ${item.color}80`,
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// Improved Instant Feedback Component with better contrast
const InstantFeedbackVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-[#b2ff14]/10 to-transparent opacity-30"></div>

    <div className="w-[85%] h-[90%] bg-black/80 border border-[#b2ff14]/30 rounded-lg overflow-hidden shadow-lg shadow-[#b2ff14]/10">
      <div className="h-6 bg-black/90 border-b border-[#b2ff14]/20 flex items-center px-2">
        <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <div className="text-xs text-gray-400 ml-2">Test Results</div>
      </div>

      <div className="p-3 h-20 flex flex-col">
        <div className="flex-1 font-mono text-xs mb-2">
          <div className="text-white mb-2">// Your solution:</div>
          <div className="mb-3 bg-black/60 p-2 rounded border border-[#b2ff14]/20">
            <span className="text-purple-400">function</span>{" "}
            <span className="text-[#b2ff14]">twoSum</span>
            <span className="text-gray-300">(</span>
            <span className="text-orange-300">nums</span>
            <span className="text-gray-300">,</span>{" "}
            <span className="text-orange-300">target</span>
            <span className="text-gray-300">)</span>{" "}
            <span className="text-gray-300">{"{"}</span>
            <div className="ml-4">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">map</span>{" "}
              <span className="text-gray-300">=</span>{" "}
              <span className="text-purple-400">new</span>{" "}
              <span className="text-orange-300">Map</span>
              <span className="text-gray-300">();</span>
            </div>
            <div className="ml-4">
              <span className="text-purple-400">for</span>
              <span className="text-gray-300">(</span>
              <span className="text-purple-400">let</span>{" "}
              <span className="text-blue-300">i</span>
              <span className="text-gray-300">=</span>
              <span className="text-yellow-300">0</span>
              <span className="text-gray-300">;</span>{" "}
              <span className="text-blue-300">i</span>
              <span className="text-gray-300"></span>
              <span className="text-orange-300">nums</span>
              <span className="text-gray-300">.</span>
              <span className="text-blue-300">length</span>
              <span className="text-gray-300">;</span>{" "}
              <span className="text-blue-300">i</span>
              <span className="text-gray-300">++)</span>{" "}
              <span className="text-gray-300">{"{"}</span>
            </div>
            <div className="ml-8">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">complement</span>{" "}
              <span className="text-gray-300">=</span>{" "}
              <span className="text-orange-300">target</span>{" "}
              <span className="text-gray-300">-</span>{" "}
              <span className="text-orange-300">nums</span>
              <span className="text-gray-300">[</span>
              <span className="text-blue-300">i</span>
              <span className="text-gray-300">];</span>
            </div>
            <div className="ml-8 truncate">
              <span className="text-purple-400">if</span>
              <span className="text-gray-300">(</span>
              <span className="text-blue-300">map</span>
              <span className="text-gray-300">.</span>
              <span className="text-[#b2ff14]">has</span>
              <span className="text-gray-300">(</span>
              <span className="text-blue-300">complement</span>
              <span className="text-gray-300">))</span>{" "}
              <span className="text-purple-400">return</span>{" "}
              <span className="text-gray-300">[</span>
              <span className="text-blue-300">map</span>
              <span className="text-gray-300">.</span>
              <span className="text-[#b2ff14]">get</span>
              <span className="text-gray-300">(</span>
              <span className="text-blue-300">complement</span>
              <span className="text-gray-300">),</span>{" "}
              <span className="text-blue-300">i</span>
              <span className="text-gray-300">];</span>
            </div>
            <div className="ml-8 truncate">
              <span className="text-blue-300">map</span>
              <span className="text-gray-300">.</span>
              <span className="text-[#b2ff14]">set</span>
              <span className="text-gray-300">(</span>
              <span className="text-orange-300">nums</span>
              <span className="text-gray-300">[</span>
              <span className="text-blue-300">i</span>
              <span className="text-gray-300">],</span>{" "}
              <span className="text-blue-300">i</span>
              <span className="text-gray-300">);</span>
            </div>
            <div className="ml-4">
              <span className="text-gray-300">{"}"}</span>
            </div>
            <div>
              <span className="text-gray-300">{"}"}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#b2ff14]/20 pt-2">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 rounded-full bg-green-500 mr-2 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-green-400 text-sm font-medium">
              All Test Cases Passed
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Improved Progress Tracking Component with better contrast
const ProgressTrackingVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-[#b2ff14]/10 to-transparent opacity-30"></div>

    <div className="w-[90%] h-[85%] flex gap-4">
      {/* Stats panel */}
      <div className="w-[40%] h-full bg-black/80 border border-[#b2ff14]/30 rounded-lg overflow-hidden shadow-lg shadow-[#b2ff14]/10 p-4">
        <h3 className="text-[#b2ff14] text-sm font-bold mb-4">
          Your Performance
        </h3>

        <div className="space-y-4">
          {/* Win rate */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white font-medium">Win Rate</span>
              <span className="text-[#b2ff14] font-medium">68%</span>
            </div>
            <div className="h-2.5 bg-black/60 rounded-full overflow-hidden border border-[#b2ff14]/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "68%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#b2ff14]/70 to-[#b2ff14] rounded-full"
              ></motion.div>
            </div>
          </div>

          {/* Problems Solved */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white font-medium">Problems Solved</span>
              <span className="text-[#b2ff14] font-medium">42/100</span>
            </div>
            <div className="h-2.5 bg-black/60 rounded-full overflow-hidden border border-[#b2ff14]/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "42%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#b2ff14]/70 to-[#b2ff14] rounded-full"
              ></motion.div>
            </div>
          </div>

          {/* Average Time */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white font-medium">Avg. Solve Time</span>
              <span className="text-[#b2ff14] font-medium">3:24</span>
            </div>
            <div className="h-2.5 bg-black/60 rounded-full overflow-hidden border border-[#b2ff14]/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "62%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#b2ff14]/70 to-[#b2ff14] rounded-full"
              ></motion.div>
            </div>
          </div>

          {/* Skill level */}
          <div className="pt-3 mt-2 border-t border-[#b2ff14]/10">
            <div className="flex justify-between text-xs mb-3">
              <span className="text-white font-medium">Skill Level</span>
              <span className="text-[#b2ff14] font-bold">Advanced</span>
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-[#b2ff14]/10 border border-[#b2ff14]/30 flex items-center justify-center mx-auto mb-1 shadow-inner shadow-[#b2ff14]/5">
                  <span className="text-[#b2ff14] font-bold">12</span>
                </div>
                <div className="text-xs text-white mt-1">Easy</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-[#b2ff14]/20 border border-[#b2ff14]/40 flex items-center justify-center mx-auto mb-1 shadow-inner shadow-[#b2ff14]/5">
                  <span className="text-[#b2ff14] font-bold">24</span>
                </div>
                <div className="text-xs text-white mt-1">Medium</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-[#b2ff14]/30 border border-[#b2ff14]/50 flex items-center justify-center mx-auto mb-1 shadow-inner shadow-[#b2ff14]/5">
                  <span className="text-[#b2ff14] font-bold">6</span>
                </div>
                <div className="text-xs text-white mt-1">Hard</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="w-[60%] h-full bg-black/80 border border-[#b2ff14]/30 rounded-lg overflow-hidden shadow-lg shadow-[#b2ff14]/10 p-4">
        <h3 className="text-[#b2ff14] text-sm font-bold mb-4">
          Global Leaderboard
        </h3>

        <div className="space-y-2">
          {/* Header */}
          <div className="grid grid-cols-12 text-xs text-white font-medium py-2 px-2 bg-[#b2ff14]/10 rounded">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Player</div>
            <div className="col-span-2">Wins</div>
            <div className="col-span-2">Solved</div>
            <div className="col-span-2">Rating</div>
          </div>

          {/* Leaderboard entries */}
          {[
            {
              rank: 1,
              name: "CodeMaster",
              wins: 142,
              solved: 87,
              rating: 2845,
            },
            { rank: 2, name: "AlgoNinja", wins: 136, solved: 92, rating: 2791 },
            {
              rank: 3,
              name: "ByteWizard",
              wins: 129,
              solved: 78,
              rating: 2733,
            },
            { rank: 4, name: "DevGenius", wins: 118, solved: 81, rating: 2687 },
            {
              rank: 5,
              name: "You",
              wins: 98,
              solved: 42,
              rating: 2512,
              highlight: true,
            },
          ].map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`grid grid-cols-12 text-xs py-2.5 ${
                player.highlight
                  ? "bg-[#b2ff14]/10 rounded border border-[#b2ff14]/30"
                  : "border-b border-[#b2ff14]/10"
              } px-2`}
            >
              <div
                className={`col-span-1 font-bold ${player.highlight ? "text-[#b2ff14]" : "text-white"}`}
              >
                {player.rank}
              </div>
              <div
                className={`col-span-5 font-medium ${player.highlight ? "text-[#b2ff14]" : "text-white"}`}
              >
                {player.name}
              </div>
              <div className="col-span-2 text-white">{player.wins}</div>
              <div className="col-span-2 text-white">{player.solved}</div>
              <div
                className={`col-span-2 font-bold ${player.highlight ? "text-[#b2ff14]" : "text-white"}`}
              >
                {player.rating}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const items = [
  {
    title: "Real-time Coding Battles",
    description:
      "Challenge opponents to intense 1v1 coding duels. Write, compile and execute code in real-time head-to-head matches.",
    header: <CodeBattleVisual />,
    className: "md:col-span-2",
    icon: <IconSwords className="h-4 w-4 text-white" />,
  },
  {
    title: "Difficulty Levels",
    description:
      "Choose your challenge level - Easy for beginners, Medium for experienced coders, Hard for programming masters.",
    header: <DifficultyLevelsVisual />,
    className: "md:col-span-1",
    icon: <IconStairs className="h-4 w-4 text-white" />,
  },
  {
    title: "Instant Feedback",
    description:
      "Get immediate results on your code execution.",
    header: <InstantFeedbackVisual />,
    className: "md:col-span-1",
    icon: <IconBolt className="h-4 w-4 text-white" />,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your performance, track win rates, and climb the global leaderboard as you master coding challenges.",
    header: <ProgressTrackingVisual />,
    className: "md:col-span-2",
    icon: <IconChartBar className="h-4 w-4 text-white" />,
  },
];

export function BentoFeatures() {
  return (
    <div className="min-h-screen bg-transparent">
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[28rem] p-8 gap-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={<div className="text-white font-bold text-xl">{item.title}</div>}
            description={
              <div className="text-gray-200">{item.description}</div>
            }
            header={item.header}
            className={cn(
              "group/bento hover:shadow-2xl transition-all duration-300",
              "bg-gradient-to-br from-neutral-900/70 to-neutral-900/30",
              "backdrop-filter backdrop-blur-xl border border-[#b2ff14]/30",
              "rounded-2xl overflow-hidden",
              "hover:border-[#b2ff14]/70 hover:shadow-[#b2ff14]/20",
              item.className
            )}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
