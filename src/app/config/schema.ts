import * as Joi from '@hapi/joi';

export const ConfigSchema = Joi.object({
  PORT: Joi.number(),

  APP_ENV: Joi.required(),
});
