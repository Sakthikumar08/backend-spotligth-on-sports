const mongoose = require('mongoose');

const tabachievementSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  text: { type: String, required: true },
});

 

module.exports  = mongoose.model('Tabachieve', tabachievementSchema);