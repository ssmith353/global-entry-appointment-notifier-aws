const { getCurrentSlotAvailabilityById } = require('../services/goes')

const getCurrentAppointments = async id => {
  const appointmentData = await getCurrentSlotAvailabilityById(id)

  console.log('Got appointment status.', appointmentData)

  if (appointmentData) {
    if (appointmentData['availableSlots'].length === 0) {
      console.log(`${id} had zero appointments available`)

      return null
    }

    const { startTimestamp, active } = appointmentData['availableSlots'][0]

    if (active) {
      console.log('Appointment Available')
      return `${id} has an open appointment on ${startTimestamp}! `
    }
  }

  throw new Error(`Could not retrieve appointment Data for ${id}`)
}

module.exports = { getCurrentAppointments }
