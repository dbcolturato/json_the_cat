const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log("An error occurred:");
    console.log(error);
    process.exit();
  }
  //console.log(typeof body);
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data[0] === undefined) {
    console.log(`The breed ${breed} doesn't exist`);
  } else {
    console.log(data[0].description);
  }
});