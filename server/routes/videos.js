const express = require('express');
const router = express.Router();
const videos = require('../db/videos')

router.get('/', (req, res) => {
  res.send(JSON.stringify(videos));
});

router.post('/', async (req, res) => {
  const { videoCard } = req.body
  videos.videosInfo.unshift(videoCard)

  res.status(200).end()
});

router.put('/', async (req, res) => {
  const { videoCard } = req.body
  videos.videosInfo.map((el) => {
    if (el.id === videoCard.id) {
        el.cover.src = videoCard.image
        el.cover.alt = videoCard.description
        el.records = videoCard.records

    }
    return el
  })

  res.status(200).end()
});

router.delete('/:id', async function(req, res) {
  const { id } = req.params

  videos.videosInfo.forEach((el, index) => {
    if (el.id === +id) {
      videos.videosInfo.splice(index, 1)
    }
  })

  res.status(200).end()
})

module.exports = router;
