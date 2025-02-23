import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditRecipe() {
    const [recipeData, setRecipeData] = useState({
        title: "",
        ingredients: "",
        instructions: "",
        time: ""
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const mockRecipe = {
            title: "Sample Recipe",
            ingredients: "Tomato, Onion, Garlic",
            instructions: "Chop, Cook, Serve",
            time: "30 min"
        };
        setRecipeData(mockRecipe);
    }, []);

    const onHandleChange = (e) => {
        let val = e.target.name === "ingredients"
            ? e.target.value.split(",")
            : e.target.name === "file"
            ? e.target.files[0]
            : e.target.value;

        setRecipeData(prev => ({ ...prev, [e.target.name]: val }));
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Recipe Data:", recipeData);
        alert("Recipe updated! (Frontend only, no backend)");
        navigate("/myRecipe");
    };

    return (
        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type="text" className='input' name="title" onChange={onHandleChange} value={recipeData.title} />
                    </div>
                    <div className='form-control'>
                        <label>Time</label>
                        <input type="text" className='input' name="time" onChange={onHandleChange} value={recipeData.time} />
                    </div>
                    <div className='form-control'>
                        <label>Ingredients</label>
                        <textarea className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange} value={recipeData.ingredients}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Instructions</label>
                        <textarea className='input-textarea' name="instructions" rows="5" onChange={onHandleChange} value={recipeData.instructions}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Recipe Image</label>
                        <input type="file" className='input' name="file" onChange={onHandleChange} />
                    </div>
                    <button type="submit">Edit Recipe</button>
                </form>
            </div>
        </>
    );
}
