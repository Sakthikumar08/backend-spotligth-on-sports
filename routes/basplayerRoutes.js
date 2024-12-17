// /backend/routes/playerRoutes.js
const express = require('express');
const { getPlayerById,getPlayers, addPlayer, updatePlayer, deletePlayer } = require('../controllers/basplayerController');
const router = express.Router();

router.get('/:id', getPlayerById);
router.get('/', getPlayers);
router.post('/', addPlayer);
router.put('/:id/stats', updatePlayer);
router.delete('/:id', deletePlayer);

module.exports = router;
