import { Router } from 'express';
import { validateSchema } from '../middleware/validateSchema.js';
import { recipeSchema } from '../schemas/recipeSchema.js';
import { createRecipe } from '../controllers/recipeController.js';

const recipeRouter = Router();

recipeRouter.post('/recipe', validateSchema(recipeSchema), createRecipe);


export default recipeRouter;