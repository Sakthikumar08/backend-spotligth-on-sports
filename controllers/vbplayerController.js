

const Player = require('../models/Vbplayer');


// Controller to get a player by ID
const getPlayerById = async (req, res) => {
  try {
    const playerId = req.params.id;

    // Fetch the player by ID from the database
    const player = await Player.findById(playerId);

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.status(200).json(player);
  } catch (error) {
    console.error('Error fetching player:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
// Fetch all players
const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch players', error });
  }
};

// Add a new player
const addPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add player', error });
  }
};


const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    // Update only the stats fields
    player.stats = { ...player.stats, ...req.body };

    await player.save();
    res.status(200).json(player);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update player stats', error });
  }
};






// Delete a player
const deletePlayer = async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to delete player', error });
  }
};

module.exports = {getPlayerById, getPlayers, addPlayer, updatePlayer, deletePlayer };
