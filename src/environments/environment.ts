import { environment as base } from 'src/config/config';

export const environment = {
  ...base,
  production: false,
  apiEndpoint: 'http://localhost:3000',
};
