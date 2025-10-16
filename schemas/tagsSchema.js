import Joi from "joi";

export const courseTypeSchema = Joi.string().valid(
    "appetizer",
    "side_dish",
    "dessert",
    "snack",
    "breakfast",
    "lunch",
    "dinner"
).required();

export const dietTypeSchema = Joi.string().valid(
    "vegan",
    "vegetarian",
    "pescatarian",
    "keto",
    "meat",
    "lactose free",
    "gluten free"
).required();

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