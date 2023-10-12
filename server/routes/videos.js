const express = require('express');
const router = express.Router();
const videos = require('../db/videos')

router.get('/', (req, res) => {
  res.send(JSON.stringify(videos));
});

router.post('/', async (req, res) => {
  console.log(req.body)

  res.status(200).end()
});

module.exports = router;
