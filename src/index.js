const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express().use(body_parser.json());
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.listen(process.env.PORT || 3000, () => {
  console.log('webhook is listening');
});

const token = process.env.TOKEN;

app.get('/webhooks', (req, res) => {
  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == token
  ) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
});
