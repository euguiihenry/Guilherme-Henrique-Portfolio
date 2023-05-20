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

app.get('/api/get-projects', async (req, res, next) => {
  try{
      const url_info = process.env.GET_PROJECTS_INFO_URL;

      const url_img = process.env.GET_PROJECTS_IMG_URL;

      const [ data_info, data_img ] = await Promise.all([
        axios.get(url_info),
        axios.get(url_img)
      ]);

      const data = {
          data_info: Object.assign(data_info.data),
          data_img: data_img.data
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
