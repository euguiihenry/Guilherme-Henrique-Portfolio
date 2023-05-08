const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const app = express();

app.use(cors(
  {
    allowedHeaders: ['Content-Type','Access-Control-Allow-Origin']
  }
));

/* app.get('/api/langue-objects', async (req, res, next) => {
  try{
      const url = process.env.LANGUE_OBJECTS_URL;
      const data = await axios.get(url);
      const info = data.data;
      res.send(info);

  } catch (error) {
      next(error);
  }
}); */

app.post('/api/post-message', async (req, res, next) => {
  try{
      const url = process.env.POST_MESSAGE_URL;
      const data = await axios.post(url, req.body);
      res.send(data.data);

  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Error retrieving data! Something went wrong!');
});

module.exports = app;
