// /backend/models/Match.js
const mongoose = require('mongoose');

const tabmatchSchema = mongoose.Schema(
  {
    team1: { type: String, required: true },
    logo1: { type: String, required: true },
    team2: { type: String, required: true },
    logo2: { type: String, required: true },
    venue: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true } 
);



module.exports = mongoose.model('Tabmatch', tabmatchSchema);
