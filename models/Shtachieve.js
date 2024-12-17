const mongoose = require('mongoose');

const shtachievementSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  text: { type: String, required: true },
});

 

module.exports  = mongoose.model('Shtachieve', shtachievementSchema);