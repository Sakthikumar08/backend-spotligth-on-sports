const mongoose = require('mongoose');

const kbachievementSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  text: { type: String, required: true },
});

const Kbachieve = mongoose.model('Kbachieve', kbachievementSchema);

module.exports = Kbachieve;