import { environment as base } from 'src/config/config';

export const environment = {
  ...base,
  production: true,
  apiEndpoint: 'https://api.example.com', // Replace with your production API endpoint
};
