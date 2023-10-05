const express = require('express');
const router = express.Router();
const helpers = require('../db/helpers')

/* GET home page. */
router.get('/', (req, res) => {
    res.send(JSON.stringify(helpers));
});

module.exports = router;
