const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  coverImage: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Album', albumSchema);