const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
    process.exit();
  } else {
    if (desc === undefined) {
      console.log(`The breed ${breedName} doesn't exist`);
    } else {
      console.log(desc);
    }
  }
});
