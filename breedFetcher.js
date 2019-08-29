const request = require('request');

const getBreeds = (string) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${string}`, (error, response, body) => {
    if (error) return console.log("there was an error");
    if (response.statusCode !== 200) return console.log(`Error: ${response.statusCode}`);

    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  });
}

getBreeds(...process.argv.slice(2));
