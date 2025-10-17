import Joi from "joi";

export const courseTypeSchema = Joi.array().items(Joi.string().valid(
    "appetizer",
    "side_dish",
    "dessert",
    "snack",
    "breakfast",
    "lunch",
    "dinner"
)).min(1).required();

export const dietTypeSchema = Joi.array().items(Joi.string().valid(
    "vegan",
    "vegetarian",
    "pescatarian",
    "keto",
    "meat",
    "lactose free",
    "gluten free"
)).min(1).required();

export const cuisineTypeSchema = Joi.string().valid(
    "lithuanian",
    "italian",
    "japanese",
    "mexican",
    "indian",
    "mediterranean",
    "french",
    "american",
    "korean",
    "other"
).required();