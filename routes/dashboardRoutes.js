// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Route to get stats for team1
router.get('/team1-stats', dashboardController.getTeam1Stats);
// Route to get the total number of players
router.get('/total-players', dashboardController.getTotalPlayers);
// Get team1 stats per month
router.get('/team1-stats-per-month', dashboardController.getTeam1StatsPerMonth);

module.exports = router;
