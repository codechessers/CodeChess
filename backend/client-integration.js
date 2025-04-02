// This file demonstrates how to integrate the backend with the frontend
// Import this in your frontend React components

import { io } from 'socket.io-client';

// Initialize socket connection
const socket = io('http://localhost:5000');

// Event listeners for connection status
socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('error', (error) => {
  console.error('Socket error:', error.message);
});

// Room creation
export const createRoom = (username, difficulty) => {
  return new Promise((resolve, reject) => {
    socket.emit('create_room', { username, difficulty });
    
    socket.once('room_created', (data) => {
      resolve(data);
    });
    
    socket.once('error', (error) => {
      reject(error);
    });
  });
};

// Join room
export const joinRoom = (username, roomCode) => {
  return new Promise((resolve, reject) => {
    socket.emit('join_room', { username, roomCode });
    
    socket.once('room_joined', (data) => {
      resolve(data);
    });
    
    socket.once('error', (error) => {
      reject(error);
    });
  });
};

// Submit solution
export const submitSolution = (roomCode, userId, code) => {
  return new Promise((resolve, reject) => {
    socket.emit('submit_solution', { roomCode, userId, code });
    
    socket.once('solution_result', (result) => {
      resolve(result);
    });
    
    socket.once('error', (error) => {
      reject(error);
    });
  });
};

// Update code in real-time
export const updateCode = (roomCode, userId, code) => {
  socket.emit('code_update', { roomCode, userId, code });
};

// Event listeners for game events
export const setupGameListeners = (callbacks) => {
  // Opponent joined the room
  socket.on('opponent_joined', (data) => {
    if (callbacks.onOpponentJoined) {
      callbacks.onOpponentJoined(data);
    }
  });
  
  // Game is about to start
  socket.on('game_starting', (data) => {
    if (callbacks.onGameStarting) {
      callbacks.onGameStarting(data);
    }
  });
  
  // Game has started
  socket.on('game_started', (data) => {
    if (callbacks.onGameStarted) {
      callbacks.onGameStarted(data);
    }
  });
  
  // Time update
  socket.on('time_update', (data) => {
    if (callbacks.onTimeUpdate) {
      callbacks.onTimeUpdate(data);
    }
  });
  
  // Time is up
  socket.on('time_up', (data) => {
    if (callbacks.onTimeUp) {
      callbacks.onTimeUp(data);
    }
  });
  
  // Round completed
  socket.on('round_completed', (data) => {
    if (callbacks.onRoundCompleted) {
      callbacks.onRoundCompleted(data);
    }
  });
  
  // Next round
  socket.on('next_round', (data) => {
    if (callbacks.onNextRound) {
      callbacks.onNextRound(data);
    }
  });
  
  // Game over
  socket.on('game_over', (data) => {
    if (callbacks.onGameOver) {
      callbacks.onGameOver(data);
    }
  });
  
  // Opponent code update
  socket.on('opponent_code_update', (data) => {
    if (callbacks.onOpponentCodeUpdate) {
      callbacks.onOpponentCodeUpdate(data);
    }
  });
  
  // Opponent disconnected
  socket.on('opponent_disconnected', (data) => {
    if (callbacks.onOpponentDisconnected) {
      callbacks.onOpponentDisconnected(data);
    }
  });
};

// Clean up event listeners
export const cleanupGameListeners = () => {
  socket.off('opponent_joined');
  socket.off('game_starting');
  socket.off('game_started');
  socket.off('time_update');
  socket.off('time_up');
  socket.off('round_completed');
  socket.off('next_round');
  socket.off('game_over');
  socket.off('opponent_code_update');
  socket.off('opponent_disconnected');
};

// Disconnect from the server
export const disconnect = () => {
  socket.disconnect();
};
