import Joi from 'joi';

export const recipeSchema = Joi.object({
    name: Joi.string().min(5).max(55).required(),
    cookingDuration: Joi.object({
        hours: Joi.number().min(0).max(23).required(),
        minutes: Joi.number().min(0).max(59).required()
    }).required(),
    cleaningTime: Joi.object({
        hours: Joi.number().min(0).max(5).required(),
        minutes: Joi.number().min(0).max(59).required()
    }),
    ingredients: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            quantity: Joi.string().required(),
        })
    ).min(1).required(),
    steps: Joi.array().items(Joi.string().min(5)).min(1).required(),
    portions: Joi.number().min(1).max(50).required(),
    courseType: Joi.string().valid('appetizer', 'main course', 'side dish', 'dessert', 'snack', 'breakfast', 'lunch', 'dinner').required(),
    dietType: Joi.string().valid('vegan', 'vegetarian', 'pescatarian', 'keto', 'meat', 'lactose free', 'gluten free').required(),
    cuisineType: Joi.string().valid('lithuanian', 'italian', 'japanese', 'mexican', 'indian', 'mediterranean', 'french', 'american', 'korean', 'other').required(),
});