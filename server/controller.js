const axios = require('axios');
const Promise = require('bluebird');
const helper = require('./helper.js');

class Controller {

  theft(req, res) {

    let config = {
      url: 'https://bikewise.org:443/api/v2/incidents',
      method: 'GET',
      params: {
        proximity: req.body.coordinates,
        proximity_square: 10
      }
    };

    return axios(config)
      .then((response) => {

        let incidents = response.data.incidents;
        let atRisk = helper.atRisk(incidents);
        incidents = helper.filter(incidents);


        let data = {
          incidents: incidents,
          atRisk: atRisk
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

}

module.exports = Controller;