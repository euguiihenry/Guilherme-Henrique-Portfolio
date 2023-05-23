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

app.get('/api/get-card-projects', async (req, res, next) => {
  try{
      const url_info = process.env.GET_PROJECT_CARD_INFO_URL;
      const url_img = process.env.GET_PROJECT_CARD_IMG_URL;

      const [ card_info, card_img ] = await Promise.all([
        axios.get(url_info),
        axios.get(url_img)
      ]);

      const data = {
          card_info: Object.assign(card_info.data),
          card_img: card_img.data
      }
      res.send(data);

  } catch (error) {
      next(error);
  }
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Error retrieving data! Something went wrong!');
});

module.exports = app;
