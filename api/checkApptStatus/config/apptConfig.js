const appointmentCentersConfig = [
  {
    alertRecipients: [process.env.ALERT_PHONE_NUMBER],
    appointmentCenter: process.env.APPOINTMENT_CENTER_ID
  }
]

module.exports = { appointmentCentersConfig }
