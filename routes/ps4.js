const express = require('express');
const router = express.Router();
const request = require('request');
const configs = require('../config/config.js');

//use get to retrieve data from API
const getWeather = function() {
    return new Promise (function (resolve, reject) {
        const options = {
            url: "https://api.openweathermap.org/data/2.5/weather?q=boston&appid=" + configs.weatherapikey,
            headers: {
                'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'accept-encoding': 'gzip, deflate',
                Host: 'api.openweathermap.org',
                'Postman-Token': 'e785ff40-99f7-48af-8efe-db46280e1603',
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.13.0',
            }
        };
        request.get(options, function (err, res, body) {
            if (err)
                reject(new Error(err))
            else {
                resolve(body)
            }
        });
    });
};

//the route using POST method to do the retrieving
router.route('/ps4')
    .post(function(req, res, next) {
        getWeather()
            .then(function (body) {
                let cityname = req.body.city
                let weather = JSON.parse(body).weather[0].description
                let temperature = JSON.parse(body).main.temp
                let humidity = JSON.parse(body).main.humidity
                res.render('weather', {city: cityname, weather: weather, temperature: temperature, humidity: humidity});
            })

            .catch( function (error) {
                console.log(error);
            });

    });

module.exports = router;