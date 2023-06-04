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
      const response = await axios.post(url, JSON.stringify(req.body), {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      console.log(response);

      res.send("Email sent successfully. 🚀😁");

  } catch (error) {
    next(error);
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
