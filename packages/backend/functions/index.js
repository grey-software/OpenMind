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
app.use('/ping', asyncWrap(ping));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Ouch. Something broke.");
});

exports.api = functions.https.onRequest(app);