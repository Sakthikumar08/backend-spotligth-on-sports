// controllers/dashboard.js
const Scorecard = require('../models/Scorecard');
const Player = require('../models/Player');

// Controller to get team1 stats (total matches, wins, and win percentage)
exports.getTeam1Stats = async (req, res) => {
    try {
      // Aggregation query to get team1 stats
      const scorecards = await Scorecard.aggregate([
        {
          $project: {
            team1Score: { $toDouble: "$team1.score" },  // Cast team1 score to number
            team2Score: { $toDouble: "$team2.score" },  // Cast team2 score to number
          },
        },
        {
          $group: {
            _id: null,
            totalMatches: { $sum: 1 },
            team1Wins: {
              $sum: {
                $cond: [
                  { $gt: ["$team1Score", "$team2Score"] },  // Compare as numbers
                  1,
                  0,
                ],
              },
            },
          },
        },
      ]);
  
      const totalMatches = scorecards.length ? scorecards[0].totalMatches : 0;
      const team1Wins = scorecards.length ? scorecards[0].team1Wins : 0;
      const winningPercentage = totalMatches > 0 ? (team1Wins / totalMatches) * 100 : 0;
  
      res.json({
        totalMatches,
        team1Wins,
        winningPercentage,
      });
    } catch (error) {
      console.error("Error fetching team1 stats:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  exports.getTeam1StatsPerMonth = async (req, res) => {
    try {
      const scorecards = await Scorecard.aggregate([
        {
          $project: {
            team1Score: { $toDouble: "$team1.score" },
            team2Score: { $toDouble: "$team2.score" },
            date: 1,
          },
        },
        {
          $project: {
            team1Score: 1,
            team2Score: 1,
            month: { $month: "$date" },
            year: { $year: "$date" },
          },
        },
        {
          $group: {
            _id: { month: "$month", year: "$year" },
            totalMatches: { $sum: 1 },
            team1Wins: {
              $sum: {
                $cond: [{ $gt: ["$team1Score", "$team2Score"] }, 1, 0],
              },
            },
          },
        },
        {
          $sort: { "_id.year": 1, "_id.month": 1 },
        },
      ]);
  
      const results = scorecards.map((card) => ({
        month: card._id.month,
        year: card._id.year,
        totalMatches: card.totalMatches,
        team1Wins: card.team1Wins,
        winPercentage:
          card.totalMatches > 0
            ? (card.team1Wins / card.totalMatches) * 100
            : 0,
      }));
  
      res.json(results);
    } catch (error) {
      console.error("Error fetching team1 stats per month:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  
  ///get the total no. of player in kabaddi
  exports.getTotalPlayers = async (req, res) => {
    try {
      const totalPlayers = await Player.countDocuments(); // Counts all the documents in the Player collection
      res.json({ totalPlayers }); // Send the count as a response
    } catch (error) {
      res.status(500).json({ message: 'Error fetching total players', error });
    }
  };

