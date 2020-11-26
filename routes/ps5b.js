const express = require('express');
const router = express.Router();
const request = require('request');
const configs = require('../config/config.js');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flush((err,response)=> {
    if (err) {
        throw new Error('not good')
    }
})

//use get to retrieve data from API
const postWeather = function() {
    return new Promise (function (resolve, reject) {
        const options = {
            url: configs.url + configs.externalapi,
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
router.get('/ps4',function(req, res, next) {
        postWeather()Weather()
            .then(function (body) {
                let cityname = req.params.city
                let weather = JSON.parse(body).weather[0].description
                let temperature = JSON.parse(body).main.temp
                res.render('weather', {city: cityname, weather: weather, temperature: temperature});
            })

            .catch( function (error) {
                console.log(error);
            });

    });

router.post('/ps4/submit',async(req,res,next){
    let city = req.body.city;
    let match = await asyncExists(city);
    if(match){
        let data = await asyncGet(city);
        let response = {
            value: data,
            cached: true
        }
        res.json(response)
    }else {
        let apivalue = configs.url + configs.externalapi + city;
        let data = await asyncSet(city,apivalue);
        data = await asyncExpire(city,15);
        let response = {
            key: city,
            value:apivalue,
            cached: false
        }
    }
    res.json(response);
});

module.exports = router;