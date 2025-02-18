import React from "react";

const HowItWorks = () => {
  const stages = [
    {
      title: "Create or Join a Room",
      description: "Start your coding battle by creating a new room or joining an existing one with a room code. Each room hosts a 1v1 match.",
      icon: "🎮"
    },
    {
      title: "Choose Your Challenge",
      description: "Select from three difficulty levels: Easy, Medium, or Hard. Each level presents unique algorithmic challenges.",
      icon: "⚔️"
    },
    {
      title: "Code & Compete",
      description: "Race against time to solve coding problems. Submit your solutions and see real-time results through Judge 0.",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-t from-gray-300 via-[#b1ff14ea] to-[#b2ff14] bg-clip-text text-transparent">
          How CodeChess Works
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stages.map((stage, index) => (
            <div key={index} className="p-6 rounded-lg border border-[#b2ff14] hover:border-[#9bd12e] transition-all duration-300">
              <div className="text-4xl mb-4">{stage.icon}</div>
              <h3 className="text-2xl font-bold text-[#b2ff14] mb-4">{stage.title}</h3>
              <p className="text-gray-300">{stage.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-black via-[#b1ff14ea] to-black p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-[#b2ff14]">Game Rules</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Each match consists of three rounds with increasing difficulty</li>
              <li>5-minute timer per round to solve the coding challenge</li>
              <li>First player to submit a correct solution wins the round</li>
              <li>Win 2 rounds to claim victory</li>
              <li>Solutions are evaluated in real-time using Judge 0</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
