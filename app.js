const fs = require('fs');

let data = fs.readFileSync('countries.json');
const countries = JSON.parse(data);
const keys = process.argv.slice(2);
if (keys.length == 0) console.log('Please provide a key');
else
  countries.map(country => {
    if (!country.translations[keys[0]]) console.log(`key not supported for ${country.name?.common}`);
    else console.log(country.translations[keys[0]].official);
  });
