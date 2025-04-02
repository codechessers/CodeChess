// In-memory storage for rooms
// In a production environment, you would use a database
const rooms = new Map();

/**
 * Create a new room
 * @param {Object} roomData - Room data
 * @returns {Object} - Created room
 */
function createRoom(roomData) {
  if (rooms.has(roomData.code)) {
    throw new Error('Room with this code already exists');
  }
  
  const room = {
    code: roomData.code,
    createdAt: new Date(),
    difficulty: roomData.difficulty || 'medium',
    createdBy: roomData.createdBy,
    opponent: null,
    isFull: false,
    gameStarted: false,
    currentRound: 0,
    creatorScore: 0,
    opponentScore: 0,
    currentProblem: null,
    timer: null
  };
  
  rooms.set(roomData.code, room);
  return room;
}

/**
 * Join an existing room
 * @param {string} roomCode - Room code
 * @param {Object} userData - User data
 * @returns {Object} - Updated room
 */
function joinRoom(roomCode, userData) {
  const room = rooms.get(roomCode);
  
  if (!room) {
    throw new Error('Room not found');
  }
  
  if (room.opponent) {
    throw new Error('Room is already full');
  }
  
  room.opponent = userData;
  room.isFull = true;
  
  return room;
}

/**
 * Get a room by its code
 * @param {string} roomCode - Room code
 * @returns {Object|null} - Room or null if not found
 */
function getRoomByCode(roomCode) {
  return rooms.get(roomCode) || null;
}

/**
 * Get all rooms
 * @returns {Array} - Array of rooms
 */
function getAllRooms() {
  return Array.from(rooms.values());
}

/**
 * Remove a user from a room
 * @param {string} roomCode - Room code
 * @param {string} socketId - Socket ID of the user to remove
 * @returns {boolean} - Success status
 */
function removeUserFromRoom(roomCode, socketId) {
  const room = rooms.get(roomCode);
  
  if (!room) {
    return false;
  }
  
  // Check if it's the creator
  if (room.createdBy && room.createdBy.socketId === socketId) {
    // If the game hasn't started or there's no opponent, delete the room
    if (!room.gameStarted || !room.opponent) {
      rooms.delete(roomCode);
      return true;
    }
    
    // Otherwise, mark the creator as disconnected
    room.createdBy.disconnected = true;
    
    // If both players are disconnected, delete the room
    if (room.opponent && room.opponent.disconnected) {
      rooms.delete(roomCode);
    }
    
    return true;
  }
  
  // Check if it's the opponent
  if (room.opponent && room.opponent.socketId === socketId) {
    // If the game hasn't started, remove the opponent
    if (!room.gameStarted) {
      room.opponent = null;
      room.isFull = false;
      return true;
    }
    
    // Otherwise, mark the opponent as disconnected
    room.opponent.disconnected = true;
    
    // If both players are disconnected, delete the room
    if (room.createdBy && room.createdBy.disconnected) {
      rooms.delete(roomCode);
    }
    
    return true;
  }
  
  return false;
}

/**
 * Find a room by user's socket ID
 * @param {string} socketId - Socket ID
 * @returns {Object|null} - Room or null if not found
 */
function getRoomByUserId(socketId) {
  for (const room of rooms.values()) {
    if (
      (room.createdBy && room.createdBy.socketId === socketId) ||
      (room.opponent && room.opponent.socketId === socketId)
    ) {
      return room;
    }
  }
  
  return null;
}

module.exports = {
  createRoom,
  joinRoom,
  getRoomByCode,
  getAllRooms,
  removeUserFromRoom,
  getRoomByUserId
};
