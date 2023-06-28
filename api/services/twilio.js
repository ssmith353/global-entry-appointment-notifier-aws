const twilio = require('twilio')

const twilioConfig = {
  messagingServiceId: process.env.TWILIO_MESSAGE_SERVICE_ID,
  twilioServiceAccountPhoneNumber: process.env.TWILIO_SERVICE_ACCT_PHONE_NUMBER,
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN
}

const initTwilioClient = () => {
  return twilio(twilioConfig.twilioAccountSid, twilioConfig.twilioAuthToken)
}

const sendTwilioSMS = async (sendToNumber, message) => {
  return new Promise(async (resolve, reject) => {
    if (!sendToNumber) {
      reject('Phone number was null')
    }

    if (sendToNumber) {
      const client = initTwilioClient()

      await client.messages
        .create({
          to: sendToNumber,
          body: message,
          messagingServiceSid: twilioConfig.messagingServiceId
        })
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
        .done()
    }
  })
}

module.exports = { sendTwilioSMS }
