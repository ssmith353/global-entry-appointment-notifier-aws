const { sendTwilioSMS } = require('../services/twilio')
const sendSMSHelper = async (alertRecipients, message) => {
  for (const alertRecipient of alertRecipients) {
    console.log('Send message')

    await sendTwilioSMS(alertRecipient, message)
  }
}

module.exports = { sendSMSHelper }
