const mongoose = require('mongoose');

const basachievementSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  text: { type: String, required: true },
});

 

module.exports  = mongoose.model('Basachieve', basachievementSchema);