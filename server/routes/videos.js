const express = require('express');
const router = express.Router();
const videos = require('../db/videos')

router.get('/', (req, res) => {
  res.send(JSON.stringify(videos));
});

router.post('/', async (req, res) => {
  console.log(req.body)
  videos.videosInfo.push(req.body)
  console.log(videos)

  res.status(200).end()
});

module.exports = router;
