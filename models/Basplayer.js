// /backend/models/Player.js
const mongoose = require('mongoose');

const basstatsSchema = new mongoose.Schema({
    matchesPlayed:Number,
    totalPoints:Number,
    fieldGoalPercentage:Number,
    freeThrowPercentage:Number,
    pointsPerMatch:Number,
    wins:Number,
    losses:Number,
    manOfMatch:Number,
});

const basplayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  rollNumber: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  stats: basstatsSchema,
});

module.exports = mongoose.model('Basplayer', basplayerSchema); 

