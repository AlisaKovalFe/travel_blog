const express = require('express');
const router = express.Router();
const greeting = require('../db/greeting')
const helpers = require('../db/helpers')

/* GET home page. */
router.get('/', (req, res) => {
  res.send(JSON.stringify(greeting));
});

module.exports = router;
