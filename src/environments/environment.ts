import { config } from 'dotenv';

config();

export const environment = {
    production: false,
    PROJECTS: process.env['PROJECTS'] || '',
    ABOUT_PHRASES: process.env['ABOUT_PHRASES'] || ''
};
