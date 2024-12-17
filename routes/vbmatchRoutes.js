// /backend/routes/matchRoutes.js
const express = require('express');
const { getMatches, addMatch } = require('../controllers/vbmatchController');

const router = express.Router();

router.route('/').get(getMatches).post(addMatch);

module.exports = router;
