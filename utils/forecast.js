const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/forecast?access_key=07af79b992684d798c99601c36b380f4&query=' + latitude + ',' + longitude + '&units=f';
   
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined);
        }
        else if(body.error){
            callback('Unable to find location', undefined);
        }
        else{
            callback(undefined, "Mintemp: " + body.forecast["2021-11-10"].mintemp +  " Maxtemp: " + body.forecast["2021-11-10"].maxtemp);
        }
    })
}

module.exports = forecast;