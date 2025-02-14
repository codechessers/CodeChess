# CodeChess 

## Overview
CodeChess is a real-time 1v1 coding challenge platform built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI. Players can create or join rooms to compete in solving coding problems across Easy, Medium, and Hard levels. Solutions are evaluated via the Judge 0 API, and the first player to solve the problem within the time limit wins.

## Tech Stack
- **Frontend:** Next.js (TypeScript), Tailwind CSS, Shadcn UI
- **Backend:** Express (TypeScript), MongoDB, Socket.IO
- **Authentication:** NextAuth (Email-Password)
- **Code Evaluation:** Judge 0 API
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)

## Features
- **Authentication:** Secure login with NextAuth.
- **Room Management:** Create or join rooms via unique codes.
- **Difficulty Levels:** Easy, Medium, Hard.
- **Real-Time Gameplay:** Socket.IO for live updates.
- **Code Editor:** Integrated editor with Judge 0 for real-time evaluations.
- **Timer:** Countdown for each round.
- **Scoring:** Displays results and tracks wins/losses.

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/codechess.git
   cd codechess
   ```
2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Add JUDGE0_API_KEY and MONGO_URI to .env
   npm run dev
   ```
3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Add NEXTAUTH_URL and BACKEND_API_URL to .env
   npm run dev
   ```

## Environment Variables
- **Backend:** `JUDGE0_API_KEY`, `MONGO_URI`, `JWT_SECRET`
- **Frontend:** `NEXTAUTH_URL`, `BACKEND_API_URL`

## Usage
- Log in via the homepage.
- Create a room or join with a code.
- Select difficulty and start playing.
- The first player to solve the challenge wins.

## API Endpoints
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/rooms/create` - Create a room
- `POST /api/rooms/join` - Join a room
- `POST /api/submit` - Submit code to Judge 0

## Deployment
- **Frontend (Vercel):** [https://codechess.vercel.app](https://codechess.vercel.app)
- **Backend (Render/Heroku):** [https://api.codechess.com](https://api.codechess.com)

## Contributing
- Fork the repository.
- Create a new branch (`git checkout -b feature-name`).
- Commit changes (`git commit -m 'Add feature'`).
- Push and open a pull request.

## License
This project is licensed under the MIT License.

