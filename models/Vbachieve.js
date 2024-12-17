const mongoose = require('mongoose');

const vbachievementSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  text: { type: String, required: true },
});

 

module.exports  = mongoose.model('Vbachieve', vbachievementSchema);