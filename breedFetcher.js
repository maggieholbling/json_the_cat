const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    let desc = null;
    let err = null;
    if (error) {
      err = `${error}`;
    } else {
      if (response.statusCode !== 200) {
        err = `Error: ${response.statusCode}`;
      } else {
        const data = JSON.parse(body);

        if (!data[0]) err = `${breed} breed is not found`;
        if (!err) desc = data[0]["description"];
      }
    }
    callback(err, desc);
  });
};

module.exports = { fetchBreedDescription };