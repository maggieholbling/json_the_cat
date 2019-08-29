const request = require('request');

const getBreeds = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) return console.log(`${error}`);
    if (response.statusCode !== 200) return console.log(`Error: ${response.statusCode}`);
    
    const data = JSON.parse(body);
    if (!data[0]) return console.log(`Error: ${breed} breed is not found`);
    console.log(data[0]["description"]);
  });
}

getBreeds(...process.argv.slice(2));
