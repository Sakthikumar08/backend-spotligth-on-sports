// /backend/models/Player.js
const mongoose = require('mongoose');

const fbstatsSchema = new mongoose.Schema({
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

const fbplayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  rollNumber: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  stats: fbstatsSchema,
});

module.exports = mongoose.model('Fbplayer', fbplayerSchema); 

