const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=83ef33b6babb4ecbff597cdfb1439c99&query=' + lat + ',' + long + '&units=m'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        }
        else if (body.error) {
            callback('Unable to find location!Try another search')
        }
        else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%`)
        }
    })
}

module.exports = forecast