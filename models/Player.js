const mongoose = require('mongoose');

// Stats Schema
const statsSchema = new mongoose.Schema({
  matchesPlayed: Number,
  totalPoints: Number,
  raidPointsPerMatch: Number,
  successfulRaidPercentage: Number,
  superRaids: Number,
  superTens: Number,
  totalRaidPoints: Number,
  noOfSuperTackle: Number,
  highFives: Number,
  totalTacklePoints: Number,
  successfulTacklePercentage: Number,
});

// Details Schema
const detailsSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  academicYear: { type: String, required: true },
  quota: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  strength: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  address: { type: String, required: true },
});

// Player Schema
const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  rollNumber: { type: String, required: true },
  imageUrl: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  stats: statsSchema,
  details: detailsSchema, // Add the new details schema here
});

module.exports = mongoose.model('Player', playerSchema);
