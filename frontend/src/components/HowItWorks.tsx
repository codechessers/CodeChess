"use client"

import { useRef, useEffect } from "react"
import { Code, Zap, Swords, GamepadIcon } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import ParticleBackground from "./ParticleBackground"

const HowItWorks = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const stages = [
    {
      title: "Create or Join a Room",
      description:
        "Start your coding battle by creating a new room or joining an existing one with a room code. Each room hosts a 1v1 match.",
      icon: <GamepadIcon className="w-8 h-8" />,
      delay: 0.1,
    },
    {
      title: "Choose Your Challenge",
      description:
        "Select from three difficulty levels: Easy, Medium, or Hard. Each level presents unique algorithmic challenges.",
      icon: <Swords className="w-8 h-8" />,
      delay: 0.3,
    },
    {
      title: "Code & Compete",
      description:
        "Race against time to solve coding problems. Submit your solutions and see real-time results through Judge 0.",
      icon: <Zap className="w-8 h-8" />,
      delay: 0.5,
    },
  ]

  const rules = [
    "Battle through 3 intense rounds with progressively challenging algorithms",
    "Strategic 5-minute countdown per round to test speed and precision",
    "Gain points by being first to submit working code solutions",
    "Achieve victory by winning best of 3 rounds",
    "Choose your preferred programming language for the battle",
    "Earn ranking points based on solution speed and efficiency"
  ]
  
  return (
    <div
      className="relative min-h-screen text-white overflow-hidden"
      ref={containerRef}
    >
      <canvas id="particles" className="absolute inset-0 z-0"></canvas>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/80 z-0"></div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-t from-gray-300 via-[#b1ff14ea] to-[#b2ff14] text-transparent bg-clip-text">
              How CodeChess Works
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Challenge your coding skills in real-time battles against other developers
          </p>
        </motion.div>

        {/* Unique vertical timeline process */}
        <div className="relative max-w-5xl mx-auto mb-24">
          {/* Progress line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#b2ff14]/10 via-[#b2ff14] to-[#b2ff14]/10 transform -translate-x-1/2 z-0 rounded-full"
            style={{
              scaleY: useTransform(scrollYProgress, [0, 0.8], [0, 1]),
              transformOrigin: "top",
            }}
          ></motion.div>

          {stages.map((stage, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative z-10 flex items-center mb-20 ${isEven ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Timeline node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black border-4 border-[#b2ff14] z-20 flex items-center justify-center"
                  whileInView={{
                    boxShadow: "0 0 20px 5px rgba(178, 255, 20, 0.3)",
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <span className="text-[#b2ff14] font-bold">{index + 1}</span>
                </motion.div>

                {/* Content card */}
                <div className={`w-5/12 ${isEven ? "pr-16" : "pl-16"}`}>
                  <motion.div
                    className="backdrop-blur-xl bg-black/30 p-8 rounded-2xl border border-[#b2ff14]/30 hover:border-[#b2ff14]/70 transition-all duration-300 shadow-lg hover:shadow-[#b2ff14]/20 relative overflow-hidden group"
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Glassmorphic inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#b2ff14]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Card content */}
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-[#b2ff14]/70 text-[#b2ff14] group-hover:bg-[#b2ff14] group-hover:text-black transition-all duration-300 mr-4">
                          {stage.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#b2ff14] transition-colors duration-300">
                          {stage.title}
                        </h3>
                      </div>

                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </motion.div>
            )
          })}
        </div>

        {/* Game rules section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#b2ff14]/20 to-[#5bff5b]/10 blur-3xl opacity-30"></div>
          <div className="relative backdrop-blur-xl bg-black/30 p-10 rounded-2xl border border-[#b2ff14]/30 shadow-xl overflow-hidden">
            {/* Glassmorphic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#b2ff14]/10 rounded-full filter blur-[50px]"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-[#b2ff14]/10 backdrop-blur-sm mr-4">
                  <Code className="w-8 h-8 text-[#b2ff14] filter drop-shadow-[0_0_8px_rgba(178,255,20,0.7)]" />
                </div>
                <h2 className="text-3xl font-bold text-white">Game Rules</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {rules.map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="backdrop-blur-md bg-white/5 p-4 rounded-xl border border-gray-800/30 hover:border-[#b2ff14]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#b2ff14]/20 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:bg-[#b2ff14]/40 transition-all duration-300">
                        <span className="text-[#b2ff14] font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {rule}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HowItWorks

