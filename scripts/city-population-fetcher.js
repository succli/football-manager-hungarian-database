const fetch = require('node-fetch');
const csv = require('csvtojson');
const path = require('path');
const querystring = require('querystring');
const fs = require('fs');
const csvConverter = require('json-2-csv');

const url = (city) => `https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&${querystring.stringify({ q: city })}&lang=hu&facet=city&facet=country&refine.country=hu`;

async function fetchCityPopulation(city) {
  const resp = await fetch(url(city), { method: 'GET' });
  const cityData = await resp.json();
  const population = cityData.records.length && cityData.records[0].fields ? cityData.records[0].fields.population || '' : '';
  console.info(`Fetched population for ${city}`);

  return {
    city,
    population
  }
}

async function readCsv() {
  const filepath = path.join(__dirname, 'cities-input.csv');
  const data = await csv({ noheader: true, headers: ['city'] }).fromFile(filepath);
  return data.map(d => d.city)
}

async function parsePopulation() {
  const cities = await readCsv();

  const data = await Promise.all(
    cities.map(fetchCityPopulation)
  );
  
  return data;
}

async function writeCsv() {
  const populationArray = await parsePopulation();
  const filepath = path.join(__dirname, 'cities-output.csv');

  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
  }

  const csv = await csvConverter.json2csvAsync(populationArray);

  fs.writeFileSync(filepath, csv);

  console.log('City list wrote successfully to CSV file')
}

try {
  writeCsv();
} catch(error) {
  throw new Error(error.message);
}
