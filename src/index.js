const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express().use(body_parser.json());
app.use(cors());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log('webhook is listening');
});
