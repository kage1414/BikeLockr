const axios = require('axios');

class Controller {

  theft(req, res, next) {

    axios.get('https://bikewise.org:443/api/v2/incidents', {
      proximity: req.body.proximity
    })
      .then((response) => {
        res.send(response);
        next();
      });

  }

}

module.exports = Controller;