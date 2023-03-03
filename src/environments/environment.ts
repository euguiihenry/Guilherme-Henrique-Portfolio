import { config } from 'dotenv';

config();

export const environment = {
    production: false,
    apiKey: process.env['PROJECTS_KEY'],
    apiUrl: process.env['PROJECTS_KEY']
};
