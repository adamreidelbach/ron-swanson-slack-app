const fetch = require('node-fetch');

async function getQuote() {
  const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  const quote = await response.json();
  return quote ? quote[0] : 'no quote found';
}

getQuote();