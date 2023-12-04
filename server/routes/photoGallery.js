const express = require('express');
const router = express.Router();
const photoGallery = require('../db/photoGallery')

router.get('/', (req, res) => {
  res.send(JSON.stringify(photoGallery));
});

module.exports = router;
