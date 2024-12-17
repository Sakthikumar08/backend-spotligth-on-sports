// /backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

const playerRoutes = require('./routes/playerRoutes');
const fbplayerRoutes = require('./routes/fbplayerRoutes');
const vbplayerRoutes = require('./routes/vbplayerRoutes');
const shtplayerRoutes = require('./routes/shtplayerRoutes');
const tabplayerRoutes = require('./routes/tabplayerRoutes');
const basplayerRoutes = require('./routes/basplayerRoutes');
const ballplayerRoutes = require('./routes/ballplayerRoutes');
const athplayerRoutes = require('./routes/athplayerRoutes');
const hocplayerRoutes = require('./routes/hocplayerRoutes');
////---------/////
const matchRoutes = require('./routes/matchRoutes');
const fbmatchRoutes = require('./routes/fbmatchRoutes');
const hocmatchRoutes = require('./routes/hocmatchRoutes');
const shtmatchRoutes = require('./routes/shtmatchRoutes');
const tabmatchRoutes = require('./routes/tabmatchRoutes');
const vbmatchRoutes = require('./routes/vbmatchRoutes');
const basmatchRoutes = require('./routes/basmatchRoutes');


/////--------//////
const scorecardRoutes = require('./routes/scorecardRoutes');

/////-------//////
const kbachieveRoutes = require('./routes/kbachieveRoutes');
const fbachieveRoutes = require('./routes/fbachieveRoutes');
const basachieveRoutes = require('./routes/basachieveRoutes');
const shtachieveRoutes = require('./routes/shtachieveRoutes');
const hocachieveRoutes = require('./routes/hocachieveRoutes');
const tabachieveRoutes = require('./routes/tabachieveRoutes');
const vbachieveRoutes = require('./routes/vbachieveRoutes');

///////-----///////
const dashboardRoutes = require('./routes/dashboardRoutes');
///////-----///////
dotenv.config();


connectDB();

const app = express();


app.use(cors()); 
app.use(express.json()); 

// API Routes
app.use('/api/players', playerRoutes); // Player-related routes
app.use('/api/fbplayers', fbplayerRoutes);
app.use('/api/vbplayers', vbplayerRoutes);
app.use('/api/basplayers', basplayerRoutes);
app.use('/api/ballplayers', ballplayerRoutes);
app.use('/api/shtplayers', shtplayerRoutes);
app.use('/api/hocplayers', hocplayerRoutes);
app.use('/api/athplayers', athplayerRoutes);
app.use('/api/tabplayers', tabplayerRoutes);
///////-----//////
app.use('/api/matches', matchRoutes); // Match-related routes
app.use('/api/basmatches', basmatchRoutes);
app.use('/api/fbmatches', fbmatchRoutes);
app.use('/api/hocmatches', hocmatchRoutes);
app.use('/api/shtmatches', shtmatchRoutes);
app.use('/api/tabmatches', tabmatchRoutes);
app.use('/api/vbmatches', vbmatchRoutes);
////////other two sports matches////

///////------//////
app.use('/api/scorecards', scorecardRoutes);

//////------//////
app.use('/api/achievements', kbachieveRoutes);
app.use('/api/basachievements', basachieveRoutes);
app.use('/api/fbachievements', fbachieveRoutes);
app.use('/api/hocachievements', hocachieveRoutes);
app.use('/api/shtachievements', shtachieveRoutes);
app.use('/api/tabachievements', tabachieveRoutes);
app.use('/api/vbachievements', vbachieveRoutes);
////////other two sports achievements////

////---dashboard---/////
app.use('/api', dashboardRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
