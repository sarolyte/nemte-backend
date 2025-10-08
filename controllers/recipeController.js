import { ObjectId } from "mongodb";
import { getDB } from "../db/connect.js";

//POST
export const createRecipe = async (req, res) => {
    const db = getDB();
    const recipeData = req.validatedBody;

    recipeData.createdAt = new Date();

    try {
        const savedRecipe = await db.collection('recipes').insertOne(recipeData);
        res.status(200).json({
            message: 'Recipe was added',
            recipeId: savedRecipe.insertedId,
            recipeName: recipeData.name,
            createdAt: recipeData.createdAt
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
        const recipes = await db
            .collection('recipes')
            .find()
            .limit(15)
            .toArray();

        if (recipes.length === 0) {
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

//GET id
export const getRecipeById = async (req, res) => {

    try {
        const recipeId = req.params.id;

        if (!ObjectId.isValid(recipeId)) {
            return res.status(400).json({ error: 'Invalid ID format' })
        };

        const db = getDB();

        const recipe = await db.collection('recipes').findOne({_id: new ObjectId(recipeId)});

        if (!recipe) {
            return res.status(404).json({ message: 'No recipes were found with this ID' })
        }

        res.status(200).json({
            message: 'A recipe was found',
            data: recipe
        })

    } catch (err) {
        console.error('Error fetching recipe:', err.message)
        res.status(500).json({err: 'Unable to fetch recipe'});
    }
}

//PUT
export const updateRecipe = async (req, res) => {
    const recipeId = req.params.id;

    if (!ObjectId.isValid(recipeId)) {
            return res.status(400).json({ error: 'Invalid ID format' })
    };

    const db = getDB();
    const updateData = req.validatedBody;

    updateData.updatedAt = new Date();

    try {
        const result = await db.collection('recipes').updateOne(
            { _id: ObjectId.createFromHexString(recipeId) },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'No recipe was found' })
        }

        res.status(200).json({
            message: 'Recipe updated successfully',
            recipeId
        })

    } catch (err) {
        console.error('Error updating recipe:', err.message)
        res.status(500).json({err: 'Failed to update recipe'});
    }

}

//DELETE
export const deleteRecipe = async (req, res) => {
    const recipeId = req.params.id;

    if (!ObjectId.isValid(recipeId)) {
            return res.status(400).json({ error: 'Invalid ID format' })
    };

    const db = getDB();

    try {
        const result = await db.collection('recipes').deleteOne(
            { _id: ObjectId.createFromHexString(recipeId) }
        );

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No recipe was found' })
        }

        res.status(200).json({
            message: `Recipe was deleted`,
            result
        })
    } catch (err) {
        console.error('Error deleting recipe:', err.message)
        res.status(500).json({err: 'Unable to delete the recipe'});
    }

}
