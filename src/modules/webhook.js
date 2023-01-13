module.exports = async function webhook(req) {
  const mytoken = process.env.MY_TOKEN;

  console.log('entrou aqui');
  const mode = req.query['hub.mode'];
  const challange = req.query['hub.challenge'];
  const token = req.query['hub.verify_token'];
  if (mode && token) {
    console.log('entrou no if do get /webhook');

    if (mode === 'subscribe' && token === mytoken) {
      return challange;
    }
    return 'Acess denied';
  }
  return 'nenhum webhook enviado';
};
