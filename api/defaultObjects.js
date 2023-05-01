const express = require('express');
const http = require('http');
const cors = require('cors');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const port = 3001;

app.use(cors());

app.get('/api/langue-objects', async (req, res) => {
  try{
      fs.readFile('./models/langue.json', async (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const info = JSON.parse(data);
        console.log("You have made a request to this server");
        res.send(info);
      });

  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data');
  }
})

server.listen(port);
