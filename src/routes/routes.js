const express = require('express');

const router = express.Router();
const MessagesController = require('../controllers/messagesController');

router.get('/webhook', MessagesController.webhook);
router.post('/messages', MessagesController.receiveMessages);

module.exports = router;
