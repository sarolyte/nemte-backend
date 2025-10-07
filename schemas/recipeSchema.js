import Joi from "joi";
import { courseTypeSchema, cuisineTypeSchema, dietTypeSchema } from "./tagsSchema.js";
import { ingredientSchema } from "./ingredientSchema.js";
import { durationSchema } from "./durationSchema.js";

export const recipeSchema = Joi.object({
  createdAt: Joi.date().optional(),
  name: Joi.string().min(5).max(55).required(),
  cookingDuration: durationSchema.required(),
  cleaningTime: durationSchema.required(),
  ingredients: Joi.array().items(ingredientSchema).min(1).required(),
  steps: Joi.array().items(Joi.string().min(5)).min(1).required(),
  portions: Joi.number().min(1).max(50).required(),
  courseType: courseTypeSchema,
  dietType: dietTypeSchema,
  cuisineType: cuisineTypeSchema,
});
