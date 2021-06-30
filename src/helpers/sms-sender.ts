import constants from '../constants'

async function sendSms(flags: { sms: string }, msgBody: string) {
  const client = require('twilio')(constants.accountSid, constants.authToken)
  const msgId = await client.messages
  .create({body: msgBody, from: constants.phoneNumber, to: flags.sms})
  .then((message: { sid: any }) => {
    return message.sid
  })
  return msgId
}

module.exports = sendSms
