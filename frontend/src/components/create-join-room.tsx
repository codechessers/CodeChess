"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, Plus, ArrowRight, Copy, Swords, Zap, ChevronDown, Check } from "lucide-react"

const CreateJoinRoom = () => {
  const [activeTab, setActiveTab] = useState<"create" | "join">("create")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("medium")
  const [roomCode, setRoomCode] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [generatedCode, setGeneratedCode] = useState<string>("")
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)

  // Mock function to generate a room code
  const generateRoomCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    setGeneratedCode(code)
  }

  // Mock function to copy room code
  const copyRoomCode = () => {
    navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Difficulty options
  const difficulties = [
    {
      id: "easy",
      name: "Easy",
      description: "Basic algorithms and data structures",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      id: "medium",
      name: "Medium",
      description: "Intermediate problem-solving techniques",
      icon: <Swords className="w-4 h-4" />,
    },
    {
      id: "hard",
      name: "Hard",
      description: "Advanced algorithms and optimizations",
      icon: <Zap className="w-4 h-4 text-[#ff4d4d]" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] text-white flex items-center justify-center p-4">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b2ff14] rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#5bff5b] rounded-full filter blur-[150px] opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#b2ff14] to-[#5bff5b] bg-clip-text text-transparent">
              CodeChess Battle Room
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Create a new coding battle room or join an existing one to challenge your skills against other developers
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center mb-8">
          <div className="backdrop-blur-md bg-black/30 p-1 rounded-xl border border-[#b2ff14]/30 flex">
            <button
              onClick={() => setActiveTab("create")}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                activeTab === "create" ? "bg-[#b2ff14] text-black font-medium" : "text-white hover:bg-white/5"
              }`}
            >
              <Plus className="w-4 h-4" />
              Create Room
            </button>
            <button
              onClick={() => setActiveTab("join")}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                activeTab === "join" ? "bg-[#b2ff14] text-black font-medium" : "text-white hover:bg-white/5"
              }`}
            >
              <Users className="w-4 h-4" />
              Join Room
            </button>
          </div>
        </div>

        {/* Main content card */}
        <div className="backdrop-blur-xl bg-black/40 rounded-2xl border border-[#b2ff14]/30 overflow-hidden shadow-lg shadow-[#b2ff14]/5">
          {/* Create Room Tab */}
          {activeTab === "create" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Create a New Battle Room</h2>

              <div className="space-y-6">
                {/* Username input */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-200 mb-2">
                    Your Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full px-4 py-3 bg-black/60 border border-[#b2ff14]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2ff14]/50 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>

                {/* Difficulty selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Difficulty Level</label>
                  <div className="relative">
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-black/60 border border-[#b2ff14]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2ff14]/50 text-white"
                    >
                      <div className="flex items-center">
                        {difficulties.find((d) => d.id === selectedDifficulty)?.icon}
                        <span className="ml-2">{difficulties.find((d) => d.id === selectedDifficulty)?.name}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>

                    {showDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-black/90 backdrop-blur-xl border border-[#b2ff14]/30 rounded-lg shadow-lg shadow-black/50 overflow-hidden">
                        {difficulties.map((difficulty) => (
                          <div
                            key={difficulty.id}
                            onClick={() => {
                              setSelectedDifficulty(difficulty.id)
                              setShowDropdown(false)
                            }}
                            className={`px-4 py-3 flex items-start gap-3 hover:bg-[#b2ff14]/10 cursor-pointer transition-colors duration-200 ${
                              selectedDifficulty === difficulty.id ? "bg-[#b2ff14]/10" : ""
                            }`}
                          >
                            <div className="mt-0.5">{difficulty.icon}</div>
                            <div>
                              <div className="font-medium text-white">{difficulty.name}</div>
                              <div className="text-xs text-gray-400">{difficulty.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Generated room code */}
                {generatedCode && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-[#b2ff14]/10 border border-[#b2ff14]/30 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-300 mb-1">Room Code:</div>
                        <div className="text-xl font-mono font-bold text-[#b2ff14]">{generatedCode}</div>
                      </div>
                      <button
                        onClick={copyRoomCode}
                        className="p-2 rounded-lg bg-black/40 border border-[#b2ff14]/30 hover:bg-[#b2ff14]/20 transition-colors duration-200"
                      >
                        {copied ? (
                          <Check className="w-5 h-5 text-[#b2ff14]" />
                        ) : (
                          <Copy className="w-5 h-5 text-[#b2ff14]" />
                        )}
                      </button>
                    </div>
                    <div className="mt-3 text-sm text-gray-400">
                      Share this code with your opponent to join the battle
                    </div>
                  </motion.div>
                )}

                {/* Create room button */}
                <button
                  onClick={generateRoomCode}
                  disabled={!username}
                  className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-black font-medium transition-all duration-300 ${
                    username
                      ? "bg-gradient-to-r from-[#b2ff14] to-[#5bff5b] hover:shadow-lg hover:shadow-[#b2ff14]/20"
                      : "bg-gray-600 cursor-not-allowed opacity-50"
                  }`}
                >
                  {generatedCode ? "Generate New Code" : "Create Battle Room"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Join Room Tab */}
          {activeTab === "join" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Join an Existing Battle</h2>

              <div className="space-y-6">
                {/* Username input */}
                <div>
                  <label htmlFor="join-username" className="block text-sm font-medium text-gray-200 mb-2">
                    Your Username
                  </label>
                  <input
                    type="text"
                    id="join-username"
                    placeholder="Enter your username"
                    className="w-full px-4 py-3 bg-black/60 border border-[#b2ff14]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2ff14]/50 focus:border-transparent text-white placeholder-gray-500"
                  />
                </div>

                {/* Room code input */}
                <div>
                  <label htmlFor="room-code" className="block text-sm font-medium text-gray-200 mb-2">
                    Room Code
                  </label>
                  <input
                    type="text"
                    id="room-code"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                    placeholder="Enter 6-digit room code"
                    className="w-full px-4 py-3 bg-black/60 border border-[#b2ff14]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2ff14]/50 focus:border-transparent text-white placeholder-gray-500 font-mono uppercase"
                    maxLength={6}
                  />
                </div>

                {/* Room code entry UI */}
                <div className="flex justify-between gap-2 py-2">
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className={`w-12 h-12 flex items-center justify-center rounded-lg border ${
                          roomCode[index] ? "border-[#b2ff14] bg-[#b2ff14]/10" : "border-gray-700 bg-black/40"
                        } text-xl font-mono font-bold text-white transition-all duration-200`}
                      >
                        {roomCode[index] || ""}
                      </div>
                    ))}
                </div>

                {/* Join room button */}
                <button
                  disabled={roomCode.length !== 6}
                  className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-black font-medium transition-all duration-300 ${
                    roomCode.length === 6
                      ? "bg-gradient-to-r from-[#b2ff14] to-[#5bff5b] hover:shadow-lg hover:shadow-[#b2ff14]/20"
                      : "bg-gray-600 cursor-not-allowed opacity-50"
                  }`}
                >
                  Join Battle Room
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom info */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>By creating or joining a room, you agree to our fair play guidelines</p>
        </div>
      </motion.div>
    </div>
  )
}

export default CreateJoinRoom

