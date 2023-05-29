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

app.post('/api/post-message', async (req, res, next) => {
  try{
      const url = process.env.POST_MESSAGE_URL;
      const message = req.body
      console.log(message);
      await axios.post('https://reqres.in/api/register', {
        message
      })

      res.send(data);

  } catch (error) {
    next(error, message);
  }
});

app.use((error, req, res, next) => {
  try {
    res.status(error.response.status).send(error.response.statusText + "\n" + req.body);
  } catch (error) {

    res.status(500).send("Error while sending and error to try to get error message\n" + req.body + "\n" + error.stack );
  }
});

module.exports = app;
