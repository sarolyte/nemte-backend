import { Router } from 'express';
import { validateSchema } from '../middleware/validateSchema.js';
import { recipeSchema } from '../schemas/recipeSchema.js';
import { allRecipes, createRecipe, getRecipeById, updateRecipe } from '../controllers/recipeController.js';

const recipeRouter = Router();

recipeRouter.post('/recipe', validateSchema(recipeSchema), createRecipe);
recipeRouter.get('/recipes', allRecipes);
recipeRouter.get('/recipe/:id', getRecipeById);
recipeRouter.put('/recipe/:id', validateSchema(recipeSchema), updateRecipe);


export default recipeRouter;