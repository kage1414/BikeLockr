const axios = require('axios');
const Promise = require('bluebird');
const helper = require('./helper.js');
const TOKEN = require('../config.js');

class Controller {

  theft(req, res) {

    let config = {
      url: 'https://bikewise.org:443/api/v2/incidents',
      method: 'GET',
      params: {
        proximity: req.query.coordinates,
        'proximity_square': 5
      }
    };

    return axios(config)
      .then((response) => {

        let incidents = response.data.incidents;
        let atRisk = helper.atRisk(incidents);
        incidents = helper.filter(incidents);


        let data = {
          incidents: incidents,
          theft: atRisk
        };

        res.send(data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
        res.sendStatus(404);
      });

  }

  weather(req, res) {
    let coords = req.query.coordinates.split(',');
    console.log(req.query);

    let config = {
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&exclude=hourly,daily&appid=${TOKEN.weatherTOKEN}`,
      method: 'GET'
    };

    return axios(config)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.status(400);
        res.send(err);
      });
  }

}

module.exports = Controller;