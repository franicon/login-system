import * as Joi from 'joi';

const createUserSchemaJoiObj = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export { createUserSchemaJoiObj };
