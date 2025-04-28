const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  coverImage: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // References to User
});

module.exports = mongoose.model('Album', albumSchema);