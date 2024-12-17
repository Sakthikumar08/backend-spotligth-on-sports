
const express = require('express');
const router = express.Router();
const {
  getAchievements,
  addAchievement,
  deleteAchievement,
} = require('../controllers/kbachieveController');

router.get('/', getAchievements);
router.post('/', addAchievement);
router.delete('/:id', deleteAchievement);

module.exports = router;
