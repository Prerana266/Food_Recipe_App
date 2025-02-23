import React, { useState } from 'react';
import profileImg from '../assets/profile.png';
import food from '../assets/foodRecipe.png';

export default function RecipeDetails() {
    const [recipe] = useState({
        email: "example@gmail.com",
        title: "Delicious Pasta",
        coverImage: food,
        ingredients: ["Tomatoes", "Pasta", "Olive oil", "Garlic", "Basil"],
        instructions: "Boil pasta, sauté garlic in olive oil, add tomatoes, mix well, and enjoy!"
    });

    return (
        <>
            <div className='outer-container'>
                <div className='profile'>
                    <img src={profileImg} width="50px" height="50px" alt="Profile" />
                    <h5>{recipe.email}</h5>
                </div>
                <h3 className='title'>{recipe.title}</h3>
                <img src={recipe.coverImage} width="220px" height="200px" alt="Recipe" />
                <div className='recipe-details'>
                    <div className='ingredients'>
                        <h4>Ingredients</h4>
                        <ul>{recipe.ingredients.map((item, index) => (<li key={index}>{item}</li>))}</ul>
                    </div>
                    <div className='instructions'>
                        <h4>Instructions</h4>
                        <span>{recipe.instructions}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
