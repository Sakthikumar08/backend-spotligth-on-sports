
const express = require('express');
const {
  getPlayerById,
  getPlayers,
  addPlayer,
  updatePlayer,
 
  getPlayerDetails,
  deletePlayer,
} = require('../controllers/playerController');
const router = express.Router();

router.get('/:id', getPlayerById); // Get a player by ID
router.get('/', getPlayers); // Get all players
router.get('/:id/details', getPlayerDetails); // Get player details
router.post('/', addPlayer); // Add a new player
router.put('/:id/stats', updatePlayer); // Update player stats
router.put('/:id/details', updatePlayer);// Update player details
router.delete('/:id', deletePlayer); // Delete a player

module.exports = router;
