import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import express from "express";

const app = express();

/* export default async function getAbout(req: VercelRequest, res: VercelResponse) {
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Make a request to the JSON endpoint
    const response = await fetch('https://gitfront.io/r/euguiihenry/jmb1cDCfAn54/portfolio-database/raw/about-phrases-global/about.json');
    const data = await response.json();

    // Send the JSON data back as a response to the client
    // res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching JSON data');
  }
} */

app.get('/', async (req, res) => {
  try {
      const response = await fetch('https://gitfront.io/r/euguiihenry/jmb1cDCfAn54/portfolio-database/raw/about-phrases-global/about.json');
      const data = await response.json();
      res.send(data);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
