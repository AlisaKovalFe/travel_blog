const express = require('express');
const router = express.Router();
const greeting = require('../db/greeting')

/* GET home page. */
router.get('/', (req, res) => {
  res.send(JSON.stringify(greeting));
});

module.exports = router;
