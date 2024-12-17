const Player = require('../models/Player');

// Get a player by ID
const getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
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
    const { name, role, rollNumber, imageUrl, rating, stats, details } = req.body;

    const player = new Player({
      name,
      role,
      rollNumber,
      imageUrl,
      rating,
      stats,
      details,
    });

    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add player', error });
  }
};

// Update player stats and/or details
const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    // Update stats if provided
    if (req.body.stats) {
      player.stats = { ...player.stats, ...req.body.stats };
    }

    // Update details if provided
    if (req.body.details) {
      player.details = { ...player.details, ...req.body.details };
    }

    // Update other player fields if provided
    if (req.body.name) player.name = req.body.name;
    if (req.body.role) player.role = req.body.role;
    if (req.body.imageUrl) player.imageUrl = req.body.imageUrl;
    if (req.body.rating) player.rating = req.body.rating;

    await player.save();
    res.status(200).json(player);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update player', error });
  }
};

// Get player details by ID
const getPlayerDetails = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id, 'details');

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.status(200).json(player.details);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch player details', error });
  }
};

// Get player stats by ID
const getPlayerStats = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id, 'stats');

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.status(200).json(player.stats);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch player stats', error });
  }
};

// Delete a player
const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.status(200).json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to delete player', error });
  }
};

module.exports = {
  getPlayerById,
  getPlayers,
  addPlayer,
  updatePlayer,
  getPlayerDetails,
  getPlayerStats,
  deletePlayer,
};
