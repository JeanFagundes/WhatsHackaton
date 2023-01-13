const webhookVerification = require('../modules/webhook');

module.exports = class MessagesController {
  static async webhook(req, res) {
    const result = await webhookVerification(req);
    return res.send(result);
  }
};
