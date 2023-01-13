const express = require('express');

const router = express.Router();
const MessagesController = require('../controllers/messagesController');

router.get('/webhook', MessagesController.webhook);

module.exports = router;
