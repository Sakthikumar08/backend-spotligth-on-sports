const mongoose = require('mongoose');

const fbachievementSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  text: { type: String, required: true },
});

 

module.exports  = mongoose.model('Fbachieve', fbachievementSchema);