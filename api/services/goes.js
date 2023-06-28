const axios = require('axios').default

const getCurrentSlotAvailabilityById = locationId => {
  const options = {
    method: 'GET',
    url: `https://ttp.cbp.dhs.gov/schedulerapi/slot-availability?locationId=${locationId}`,
    headers: {
      'Accept': 'application/json, text/plain, */*'
    }
  }

  return axios
    .request(options)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error)
    })
}

const getAvailableAppointmentsAnywhere = () => {
  const options = {
    method: 'GET',
    url: `https://ttp.cbp.dhs.gov/schedulerapi/slots/asLocations?minimum=1&limit=5&serviceName=Global%20Entry`,
    headers: {
      'Accept': 'application/json, text/plain, */*'
    }
  }

  return axios
    .request(options)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error)
    })
}

module.exports = { getCurrentSlotAvailabilityById }
