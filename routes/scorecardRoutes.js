const express = require('express');
const { getScorecards, getScorecardById, createScorecard, updateScorecard, deleteScorecard } = require('../controllers/scorecardController');

const router = express.Router();

// API Endpoints
router.get('/', getScorecards);          
router.get('/:id', getScorecardById);      
router.post('/', createScorecard);        
router.put('/:id', updateScorecard);       
router.delete('/:id', deleteScorecard);    

module.exports = router;
