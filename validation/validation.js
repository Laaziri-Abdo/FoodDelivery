const joi = require('joi');



const registerValidation = (data) => {
  const schema = joi.object().keys({
    username: joi.string().alphanum().min(3).max(30).required(),
    fullname: joi.string().alphanum().min(3).max(30).required(),
    role: joi.string().alphanum().min(3).max(30).required(),
    phone: joi.number().integer(),
    adress: joi.string().min(3).max(30),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: joi.string().email({ minDomainSegments: 2 })
  })
  return schema.validate(data);
}

const loginValidation = data => {
  const schema = joi.object().keys({
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: joi.string().email({ minDomainSegments: 2 })
  })
  return schema.validate(data);
}

module.exports = {
  registerValidation,
  loginValidation
}
