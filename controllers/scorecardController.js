const Scorecard = require('../models/Scorecard');

// Get all scorecards
const getScorecards = async (req, res) => {
  try {
    const scorecards = await Scorecard.find().populate('matchId'); // Populate only if matchId exists in the schema
    res.json(scorecards);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Return detailed error for debugging
  }
};


// Get a specific scorecard by ID
const getScorecardById = async (req, res) => {
  try {
    const scorecard = await Scorecard.findById(req.params.id).populate('matchId');
    if (!scorecard) {
      return res.status(404).json({ message: 'Scorecard not found' });
    }
    res.status(200).json(scorecard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new scorecard
const createScorecard = async (req, res) => {
  try {
    const newScorecard = new Scorecard(req.body);
    const savedScorecard = await newScorecard.save();
    res.status(201).json(savedScorecard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a scorecard
const updateScorecard = async (req, res) => {
  try {
    const updatedScorecard = await Scorecard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedScorecard) {
      return res.status(404).json({ message: 'Scorecard not found' });
    }
    res.status(200).json(updatedScorecard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const deleteScorecard = async (req, res) => {
  try {
    const scorecardId = req.params.id;
    await Scorecard.findByIdAndDelete(scorecardId);
    res.status(200).json({ message: 'Scorecard deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting scorecard' });
  }
};

module.exports = {
  getScorecards,
  getScorecardById,
  createScorecard,
  updateScorecard,
  deleteScorecard,
};
