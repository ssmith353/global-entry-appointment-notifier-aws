const formatError = function(error) {
  return {
    'statusCode': error.statusCode,
    'headers': {
      'Content-Type': 'text/plain',
      'x-amzn-ErrorType': error.code
    },
    'isBase64Encoded': false,
    'body': error.code + ': ' + error.message
  }
}

const formatResponse = body => {
  if (!body) {
    body = JSON.stringify({ message: 'Success!' })
  }

  return {
    'statusCode': 200,
    'headers': {
      'Content-Type': 'text/plain'
    },
    'body': body
  }
}

const serialize = function(object) {
  if (object) {
    return JSON.stringify(object, null, 2)
  }
  return undefined
}

const getPathQuery = event => {
  if (event) return event.queryStringParameters
}

module.exports = { serialize, formatError, formatResponse, getPathQuery }
