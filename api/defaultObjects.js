const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/api/langue-objects', async (req, res) => {
  try{
      const data = await fs.promises.readFile('./public/models/langue.json');
      const info = JSON.parse(data);
      console.log("You have made a request to this server");
      res.send(info);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data');
  }
});

module.exports = app;
