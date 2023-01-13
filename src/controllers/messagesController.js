const webhookVerification = require('../modules/webhook');
const receiveMessages = require('../modules/receiveMessages');

module.exports = class MessagesController {
  static async webhook(req, res) {
    const result = await webhookVerification(req);
    return res.send(result);
  }

  static async receiveMessages(req, res) {
    const body_param = await req.body();

    const result = await receiveMessages(body_param);
    return res.send(result);
  }
};
