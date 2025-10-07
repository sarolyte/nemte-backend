import { getDB } from "../db/connect.js";

//POST
export const createRecipe = async (req, res) => {
    const db = getDB();
    const recipeData = req.validatedBody;

    try {
        const savedRecipe = await db.collection('recipes').insertOne(recipeData);
        res.status(200).json({
            message: 'Recipe was added',
            recipeId: savedRecipe.insertedId,
            recipeName: recipeData.name
        });
    } catch (err) {
        console.err('Error saving recipe:', err.message)
        res.status(500).json({err: 'Recipe was not added'});
    }
}