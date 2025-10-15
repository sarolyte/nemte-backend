import Joi from 'joi';

export const durationSchema = Joi.object({
    hours: Joi.number().min(0).max(24).required(),
    minutes: Joi.number().min(0).max(59).required(),
    quantity: Joi.string().optional(),
})