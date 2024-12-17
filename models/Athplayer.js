// /backend/models/Player.js
const mongoose = require('mongoose');

const athstatsSchema = new mongoose.Schema({
  matchesPlayed: Number,
  goals: Number,
  assists: Number,
  passesCompleted: Number,
  successfulPassPercentage: Number,
  tackles: Number,
  interceptions: Number,
  shotsOnTarget: Number,
  cleanSheets: Number,
  yellowCards: Number,
  redCards: Number,
});

const athplayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  rollNumber: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  stats: athstatsSchema,
});

module.exports = mongoose.model('Athplayer', athplayerSchema); 

