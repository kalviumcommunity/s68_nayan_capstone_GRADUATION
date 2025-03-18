const Album = require('../models/album');
 
// Submit a new album
exports.submitAlbum = async (req, res) => {
  try {
    const { name, artist, releaseYear, coverImage, genre, description } = req.body;
    const newAlbum = new Album({ name, artist, releaseYear, coverImage, genre, description });
    await newAlbum.save();
    res.status(201).json({ message: 'Album submitted successfully', album: newAlbum });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit album' });
  }
};


exports.voteAlbum = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }
    album.votes += 1;
    await album.save();
    res.status(200).json({ message: 'Vote recorded', album });
  } catch (err) {
    res.status(500).json({ error: 'Failed to vote for album' });
  }
};

// Get all albums sorted by vot
exports.getAlbums = async (req, res) => {
  try {
    const albums = await Album.find().sort({ votes: -1 });
    res.status(200).json(albums);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch albums' });
  }
};