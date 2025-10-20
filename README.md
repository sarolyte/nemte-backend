# Nemte Backend (Node.js + MongoDB)

## Introduction

Nemte is a recipe website that currently allows anyone to browse, create, edit and delete recipes.

This is a final mobile-first Code Academy Front-End course project.

This repository contains the backend part of the project, built with **Node.js** and **MongoDB**.  

The backend must be connected to a separate **React + Vite frontend** project - https://github.com/sarolyte/nemte-frontend. Both must be running at the same time for the application to function properly.

---

## Getting Started

Follow these steps to get the backend running on your local system.

### 1. Installation Process

1. Download or clone this repository to your computer.
2. Open the project in Visual Studio Code or your preferred editor.
3. Create a `.env` file, and place you MongoDB URI there in this format - `MONGODB_URI=[your_uri]`
4. Open a terminal in the project folder and run the command:

```bash 
    npm install
```

This will install all the required dependencies.

### 2. Software dependencies

You will need Node.js version 18 or higher installed on your system.

For MongoDB, you can use a free account on cloud.mongodb.com or any other cloud or local setup that you would prefer.

---

## Build

1. In the terminal, run the command:
npm start
2. This will start the backend development server.
3. You can then launch the frontend project mentioned above, and open it in your browser, usually at http://localhost:5173

---

## API reference
`/recipe` - create a recipe (POST)
`/recipes` - get all recipes (GET)
`/recipe/:id` - get, edit or delete a specific recipe, depending on HTTP method used (GET, PUT, DELETE acordingly)

POST body example (For all options see schemas folder):
```JSON
{
    "name": "Creamy Garlic Shrimp Pasta",
    "cookingDuration": {
        "hours": "0",
        "minutes": "30"
    },
    "image": "https://www.eatwell101.com/wp-content/uploads/2020/04/Shrimp-Pasta-recipe.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet felis ante. Curabitur tincidunt augue nec libero semper, ut gravida sapien egestas. Duis dapibus pulvinar dolor, eget dictum tellus rutrum aliquet. Praesent sed lacinia arcu. Cras fermentum ex in sem aliquet interdum. Suspendisse sit amet mi dui. Sed magna augue, vestibulum eu semper hendrerit, ornare at sapien",
    "cleaningTime": {
        "hours": "0",
        "minutes": "20"
    },
    "ingredients": [
        { "name": "Spaghetti", "quantity": "200 g" },
        { "name": "Raw shrimp", "quantity": "250 g, peeled and deveined" },
        { "name": "Butter", "quantity": "2 tbsp" },
        { "name": "Garlic cloves", "quantity": "3, minced" },
        { "name": "Heavy cream", "quantity": "1/2 cup" },
        { "name": "Parmesan cheese", "quantity": "1/4 cup, grated" },
        { "name": "Olive oil", "quantity": "1 tbsp" },
        { "name": "Salt", "quantity": "to taste" },
        { "name": "Black pepper", "quantity": "to taste" },
        { "name": "Fresh parsley", "quantity": "1 tbsp, chopped" }
    ],
    "steps": [
        "Cook pasta in salted boiling water until al dente, then drain.",
        "While pasta cooks, heat butter and olive oil in a skillet over medium heat.",
        "Add minced garlic and sauté for 30 seconds.",
        "Add shrimp and cook until pink, about 2–3 minutes per side.",
        "Pour in the cream and Parmesan; stir until the sauce thickens slightly.",
        "Add pasta to the skillet, toss to coat, and season with salt and pepper.",
        "Sprinkle chopped parsley before serving."
    ],
    "portions": 2,
    "courseType": [
        "dinner",
        "snack"
    ],
    "dietType": [
        "pescatarian",
        "lactose free"
    ],
    "cuisineType": "italian"
}
```