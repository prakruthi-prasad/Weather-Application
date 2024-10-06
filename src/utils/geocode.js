const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.positionstack.com/v1/forward?access_key=6c793c6105086e98fa59651cefa26cff&query=' + encodeURIComponent(address) + '&limit=1';

    request({ url, json: true }, (error, { body } = {}) => {
        console.log(body, "body")
        if (error) {
            callback('Unable to connect to location services!')
        }
        else if (body.error) {
            callback('Unable to find location! Try another search')
        }
        else if (body.data.length == 0) {
            callback('Unable to find location! Try another search')
        }
        else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].name
            })
        }
    })
}

module.exports = geoCode