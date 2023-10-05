const express = require('express');
const router = express.Router();
const destinations = require('../db/destinations')

router.get('/', (req, res) => {
  res.send(JSON.stringify(destinations));
});

module.exports = router;
