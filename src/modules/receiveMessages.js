module.exports = async function receiveMessage(body_param) {
  console.log(body_param);

  const typeMessage = body_param.entry[0].changes[0].value.messages[0].type;

  if (typeMessage === 'text') {
    // ainda não sei o que fazer, vamos lutando
    const message = JSON.stringify(body_param, null, 2);
    const answer = body_param.entry[0].changes[0].value.messages[0].text.body;
    const id = body_param.entry[0].changes[0].value.contacts[0].wa_id;
    console.log(answer);
    console.log(message);
    console.log(id);

    return answer;
  }
  if (typeMessage === 'interactive') {
    const message = JSON.stringify(body_param, null, 2);
    let answer;
    try {
      answer = body_param.entry[0].changes[0].value.messages[0].interactive.button_reply.id;
    } catch (error) {
      console.log(error.message);
      answer = body_param.entry[0].changes[0].value.messages[0].interactive.list_reply.id;
    }

    const { from } = body_param.entry[0].changes[0].value.messages[0];
    console.log(message);
    console.log(from);
    console.log(answer);

    return new Error(`Tipo de mensagem invalido ${typeMessage}`);
  }
  return 'ok';
};
