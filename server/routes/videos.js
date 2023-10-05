const express = require('express');
const router = express.Router();
const videos = require('../db/videos')

router.get('/', (req, res) => {
  res.send(JSON.stringify(videos));
});

module.exports = router;
