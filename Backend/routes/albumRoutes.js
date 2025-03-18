// albumRoutes.js
const express = require('express');
const albumController = require('../controllers/albumController');
const router = express.Router();

router.post('/submit', albumController.submitAlbum);
router.post('/vote/:id', albumController.voteAlbum);
router.get('/albums', albumController.getAlbums);

module.exports = router;