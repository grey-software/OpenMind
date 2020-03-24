const express = require('express');
const asyncWrap = require('../utils/asyncWrap');

const axios = require('axios');

const downloadPDFBuffer = async (url) => {
  try {
    let res = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    return res.data;
  } catch (e) {
    return e
  }
}

const handlers = {};

handlers.download = async (req, res) => {
  const { url } = req.query;
  let pdfBuffer = await downloadPDFBuffer(url)
  try {
    res.status(200);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline');
    res.send(Buffer.from(pdfBuffer))
  } catch (e) {    
    res.status(400).send(data)
  }
}

const router = express.Router();

router.get('/download', asyncWrap(handlers.download));

module.exports = router;