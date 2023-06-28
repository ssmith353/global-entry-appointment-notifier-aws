const getTimestamp = () => {
  const date = new Date()

  return date.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles'
  })
}

module.exports = { getTimestamp }
