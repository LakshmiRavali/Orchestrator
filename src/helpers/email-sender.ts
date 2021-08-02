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
    // eslint-disable-next-line no-console
    console.error('Error sending test email')
    // eslint-disable-next-line no-console
    console.error(error)
    if (error.response) {
      // eslint-disable-next-line no-console
      console.error(error.response.body)
    }
  }
}

module.exports = sendEmail
