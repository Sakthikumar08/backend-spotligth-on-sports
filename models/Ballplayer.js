// /backend/models/Player.js
const mongoose = require('mongoose');

const ballstatsSchema = new mongoose.Schema({
    matchesPlayed: Number,
    totalPoints: Number,
    smashPointsPerMatch: Number,
    rallyPoints:Number,
    successfulServes:Number,
    faults:Number,
    totalSmashPoints:Number,
    successfulRallies:Number,
    netPlays:Number,
    totalRallyPoints:Number,
    successfulServePercentage:Number,
});

const ballplayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  rollNumber: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  stats: ballstatsSchema,
});

module.exports = mongoose.model('Ballplayer', ballplayerSchema); 

