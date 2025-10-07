import { Router } from 'express';
import { validateSchema } from '../middleware/validateSchema.js';
import { recipeSchema } from '../schemas/recipeSchema.js';
import { allRecipes, createRecipe, getRecipeById } from '../controllers/recipeController.js';

const recipeRouter = Router();

recipeRouter.post('/recipe', validateSchema(recipeSchema), createRecipe);
recipeRouter.get('/recipes', allRecipes);
recipeRouter.get('/recipe/:id', getRecipeById);


export default recipeRouter;