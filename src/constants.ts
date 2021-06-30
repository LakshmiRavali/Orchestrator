const constants = {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN,
  phoneNumber: process.env.TWILIO_PHONENUMBER,
  fromEmail: process.env.FROM_EMAIL,
  sendGripApiKey: process.env.SENDGRID_API_KEY,
}
export default constants
