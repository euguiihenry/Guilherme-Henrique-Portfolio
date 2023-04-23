// Import necessary modules
import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

// Define the handler function
export default async function getProjects(req:VercelRequest, res: VercelResponse) {


  /* // Fetch data from external API
  const response = await fetch('https://raw.githubusercontent.com/euguiihenry/portfolio-database/main/projects-global/projects-info.json');
  const data = await response.json();

  // Return the response as JSON
  res.status(200).json(data); */

  res.statusCode = 200;
  res.json({message: 'It works!'});
}
