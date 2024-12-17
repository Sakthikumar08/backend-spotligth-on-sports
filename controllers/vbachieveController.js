const Achievement = require('../models/Vbachieve');

// Get all achievements
const getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new achievement
const addAchievement = async (req, res) => {
  try {
    const { imgSrc, text } = req.body;
    const newAchievement = new Achievement({ imgSrc, text });
    await newAchievement.save();
    res.status(201).json(newAchievement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an achievement
const deleteAchievement = async (req, res) => {
  try {
    await Achievement.findByIdAndDelete(req.params.id);
    res.json({ message: 'Achievement deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { getAchievements, addAchievement, deleteAchievement };
