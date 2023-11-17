import Joi from 'joi';

const userCreate = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

const userCreateValidate = (data) => userCreate.validate(data);

export { userCreateValidate };