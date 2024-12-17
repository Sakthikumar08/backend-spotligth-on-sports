const mongoose = require('mongoose');

const ScorecardSchema = new mongoose.Schema({
  matchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' }, // Reference to the Match collection
  team1: {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    score: { type: Number, required: true },
    stats: {
      firstHalf: {
        raid: { type: Number, required: true },
        tackle: { type: Number, required: true },
        allout: { type: Number, required: true },
      },
      secondHalf: {
        raid: { type: Number, required: true },
        tackle: { type: Number, required: true },
        allout: { type: Number, required: true },
      },
    },
  },
  team2: {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    score: { type: Number, required: true },
    stats: {
      firstHalf: {
        raid: { type: Number, required: true },
        tackle: { type: Number, required: true },
        allout: { type: Number, required: true },
      },
      secondHalf: {
        raid: { type: Number, required: true },
        tackle: { type: Number, required: true },
        allout: { type: Number, required: true },
      },
    },
  },
  date: { type: Date, required: true  },
});

module.exports = mongoose.model('Scorecard', ScorecardSchema);
