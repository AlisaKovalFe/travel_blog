const express = require('express');
const router = express.Router();
const about = require('../db/about')

router.get('/', (req, res) => {
  res.send(JSON.stringify(about));
});

module.exports = router;
