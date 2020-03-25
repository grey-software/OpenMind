const express = require('express');
const asyncWrap = require('../utils/asyncWrap');

const pdfParse = require('pdf-parse');
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
  try {
    let pdfBuffer = await downloadPDFBuffer(url)
    res.status(200);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline');
    res.send(Buffer.from(pdfBuffer))
  } catch (e) {
    console.log(e);
    res.status(400).send({success: false});
  }
}

handlers.metadata = async (req, res) => {
  const { url } = req.query;
  try {
    let pdfBuffer = await downloadPDFBuffer(url)
    let data = await pdfParse(pdfBuffer);
    res.status(200);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(400).send({success: false})
  }
}

const router = express.Router();

router.get('/download', asyncWrap(handlers.download));
router.get('/metadata', asyncWrap(handlers.metadata));


module.exports = router;