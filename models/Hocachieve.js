const mongoose = require('mongoose');

const hocachievementSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  text: { type: String, required: true },
});

 

module.exports  = mongoose.model('Hocachieve', hocachievementSchema);