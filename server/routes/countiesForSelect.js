const express = require('express');
const router = express.Router();
const countriesForSelect = require('../db/countriesForSelect')

router.get('/', (req, res) => {
  res.send(JSON.stringify(countriesForSelect));
});

module.exports = router;
