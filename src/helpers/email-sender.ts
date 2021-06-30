import constants from '../constants'

const sgMail = require('@sendgrid/mail')

async function sendEmail(flags: { email: any }, subject: any, msgBody: any) {
  sgMail.setApiKey(constants.sendGripApiKey)
  const msg = {
    to: flags.email,
    from: constants.fromEmail,
    subject: subject,
    text: msgBody,
  }
  try {
    await sgMail.send(msg)
  } catch (error) {
    console.error('Error sending test email')
    console.error(error)
    if (error.response) {
      console.error(error.response.body)
    }
  }
}

module.exports = sendEmail
