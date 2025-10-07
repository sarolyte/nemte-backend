import Joi from 'joi';

export const durationSchema = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.string().required()
})