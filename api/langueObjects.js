const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors(
  {
    allowedHeaders: ['Content-Type','Access-Control-Allow-Origin']
  }
));

app.get('/api/langue-objects', async (req, res, next) => {
  try{
      const url = 'https://gitfront.io/r/euguiihenry/jmb1cDCfAn54/portfolio-database/raw/langue-objects/langue.json'
      const data = await axios.get(url);
      const info = data.data;
      res.send(info);

  } catch (error) {
      next(error);
  }
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Error retrieving data! Something went wrong!');
});

module.exports = app;
