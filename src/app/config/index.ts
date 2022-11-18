import { registerAs } from '@nestjs/config';

export const Config = registerAs('', () => ({
  env: process.env.APP_ENV,
  port: process.env.PORT,

  database: {
    mongoUri: process.env.MONGO_URI,
  },
}));
