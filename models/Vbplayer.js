// /backend/models/Player.js
const mongoose = require('mongoose');

const vbstatsSchema = new mongoose.Schema({
    matchesPlayed: Number,
    totalPoints: Number,
    aces: Number,
    assists: Number,
    blocks: Number,
   
    attackPercentage: Number,
    
    servePercentage: Number,
});

const vbplayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  rollNumber: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  stats: vbstatsSchema,
});

module.exports = mongoose.model('Vbplayer', vbplayerSchema); 

