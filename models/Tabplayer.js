// /backend/models/Player.js
const mongoose = require('mongoose');

const tabstatsSchema = new mongoose.Schema({
    matchesPlayed: Number,
    totalPoints: Number,
    averagePointsPerMatch: Number,
    successfulReturnsPercentage: Number,
    aces: Number,
    doubleFaults: Number,
    totalServicePoints: Number,
    ralliesWon: Number,
    breakPointsSaved: Number,
    totalRallyPoints: Number,
    successfulSmashPercentage: Number,
});

const tabplayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  rollNumber: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  stats: tabstatsSchema,
});

module.exports = mongoose.model('Tabplayer', tabplayerSchema); 

