const admin = require('firebase-admin');
const functions = require('firebase-functions');

const express = require('express');
const app = express();

const asyncWrap = require('./src/utils/asyncWrap');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
db.settings({timestampsInSnapshots: true});

const cors = require('cors')({origin: true});

app.use((req, res, next) => {
  console.log(req.path);
  next();
})

app.use((req, res, next) => {
  cors(req, res, () => {});
  if(req.method === 'OPTIONS') return;
  next();
})

const ping = async (req, res) => {
  res.status(200).send('Status: Connecting ideas.');
}

app.use('/opengraph', require('./src/opengraph'));
app.use('/pdf', require('./src/pdf'));
app.use('/ping', asyncWrap(ping));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Ouch. Something broke.");
});

exports.api = functions.https.onRequest(app);

let puppeteer = null;
let browser = null;
exports.screenshot = functions.runWith({memory: "1GB"}).https.onRequest(async (req, res) => {
  if (!puppeteer) puppeteer = require('puppeteer');
  const { url } = req.query;

  if (!browser) browser = await puppeteer.launch({
    defaultViewport: {width: 1920, height: 1080},
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(url);
  let b64string = await page.screenshot({ encoding: "base64" });
  let buffer = Buffer.from(b64string, "base64");
  res.setHeader('Content-Type', 'image/png');
  res.send(buffer);
  return;
})