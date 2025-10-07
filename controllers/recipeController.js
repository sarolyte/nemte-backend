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
        console.error('Error saving recipe:', err.message)
        res.status(500).json({err: 'Recipe was not added'});
    }
}

//GET
export const allRecipes = async (req, res) => {
    const db = getDB();
    try {
        const recipes = await db.collection('recipes')
            .find()
            .limit(15)
            .toArray();

        if (recipes.lenght === 0) {
            return res.status(200).json({
                message: 'No recipe were found', 
                data: []
            })
        };

        res.status(201).json({
            message: 'All recipes',
            data: recipes
        });

    } catch (err) {
        console.error('Error fetching recipes:', err.message)
        res.status(500).json({err: 'Unable to fetch recipes'});
    }
}