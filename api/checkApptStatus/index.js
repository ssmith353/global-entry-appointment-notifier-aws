const { getCurrentAppointments } = require('../util/apptUtil')
const { appointmentCentersConfig } = require('./config/apptConfig')
const { sendSMSHelper } = require('../util/twilioHelper')
const { serialize, formatResponse, formatError } = require('../util/requestUtil')

module.exports.fn = async (event, context) => {
  console.log('## ENVIRONMENT VARIABLES: ' + serialize(process.env))
  console.log('## CONTEXT: ' + serialize(context))
  console.log('## EVENT: ' + serialize(event))

  try {
    console.log('Get appointment status')

    console.log(serialize(appointmentCentersConfig))

    for (const apptConfig of appointmentCentersConfig) {
      const { alertRecipients, appointmentCenter } = apptConfig

      const appointmentStatus = await getCurrentAppointments(appointmentCenter)

      console.log(`Appointment status message result ${serialize(appointmentStatus)}`)

      if (appointmentStatus) {
        await sendSMSHelper(alertRecipients, appointmentStatus)
      }
    }

    return formatResponse()
  } catch (err) {
    return formatError(err)
  }
}
