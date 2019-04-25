const fetch = require('node-fetch');

const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
module.exports = async (req, res) => {
  let result;

  try {
    const response = await fetch(url);
    const quote = await response.json();
    result = quote[0];
  } catch (error) {
    result = 'There was an error during your request';
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  // Create response object and send result back to Slack
  const response_type = "in_channel";
  res.end(JSON.stringify({ response_type, text: `_${result}_` }));
};