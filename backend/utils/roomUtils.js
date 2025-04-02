/**
 * Generate a random room code
 * @returns {string} - 6-character alphanumeric room code
 */
function generateRoomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
  }
  
  /**
   * Validate a room code format
   * @param {string} code - Room code to validate
   * @returns {boolean} - Whether the code is valid
   */
  function validateRoomCode(code) {
    // Room code should be 6 alphanumeric characters
    return /^[A-Z0-9]{6}$/.test(code);
  }
  
  module.exports = {
    generateRoomCode,
    validateRoomCode
  };
  