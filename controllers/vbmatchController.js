// /backend/controllers/matchController.js
const Match = require('../models/Vbmatch');

// Fetch all matches
const getMatches = async (req, res) => {
  try {
    const matches = await Match.find(); 
    res.status(200).json(matches); 
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add a new match
const addMatch = async (req, res) => {
  const { team1, logo1, team2, logo2, venue, date } = req.body;

  
  if (!team1 || !logo1 || !team2 || !logo2 || !venue || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newMatch = new Match({ team1, logo1, team2, logo2, venue, date });
    const savedMatch = await newMatch.save(); 
    res.status(201).json(savedMatch);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getMatches, addMatch };
