const express = require('express');
const asyncWrap = require('../utils/asyncWrap');

const ogs = require('open-graph-scraper');

const scrapeOGS = async (url) => {
  try {
    let options = {url, 'timeout': 4000};
    return await ogs(options)
  } catch (e) {
    return e
  }
}

const handlers = {};

handlers.scrape = async (req, res) => {
  const {url} = req.body;
  let data = await scrapeOGS(url)
  if (data.success) {
    res.status(200).send(data)
  } else {
    res.status(400).send(data)
  }
}

const router = express.Router();

router.post('/scrape', asyncWrap(handlers.scrape));

module.exports = router;