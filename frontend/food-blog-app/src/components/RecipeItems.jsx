import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function RecipeItems() {
    const [allRecipes, setAllRecipes] = useState([
        { _id: "1", title: "Pasta", time: "30 min", coverImage: foodImg },
        { _id: "2", title: "Pizza", time: "45 min", coverImage: foodImg }
    ])
    
    let path = window.location.pathname === "/myRecipe"
    let favItems = JSON.parse(localStorage.getItem("fav")) ?? []
    const [isFavRecipe, setIsFavRecipe] = useState(false)
    const navigate = useNavigate()

    const onDelete = (id) => {
        setAllRecipes(recipes => recipes.filter(recipe => recipe._id !== id))
        let filterItem = favItems.filter(recipe => recipe._id !== id)
        localStorage.setItem("fav", JSON.stringify(filterItem))
    }

    const favRecipe = (item) => {
        let filterItem = favItems.filter(recipe => recipe._id !== item._id)
        favItems = favItems.some(recipe => recipe._id === item._id) ? filterItem : [...favItems, item]
        localStorage.setItem("fav", JSON.stringify(favItems))
        setIsFavRecipe(pre => !pre)
    }

    return (
        <>
            <div className='card-container'>
                {allRecipes.map((item, index) => (
                    <div key={index} className='card' onDoubleClick={() => navigate(`/recipe/${item._id}`)}>
                        <img src={item.coverImage} width="120px" height="100px" alt="Recipe" />
                        <div className='card-body'>
                            <div className='title'>{item.title}</div>
                            <div className='icons'>
                                <div className='timer'><BsStopwatchFill />{item.time}</div>
                                {!path ? (
                                    <FaHeart 
                                        onClick={() => favRecipe(item)}
                                        style={{ color: favItems.some(res => res._id === item._id) ? "red" : "" }} 
                                    />
                                ) : (
                                    <div className='action'>
                                        <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>
                                        <MdDelete onClick={() => onDelete(item._id)} className='deleteIcon' />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
