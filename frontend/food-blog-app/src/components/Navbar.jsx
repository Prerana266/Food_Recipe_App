import React, { useState } from 'react'
import Modal from './Modal'
import InputForm from './InputForm'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const checkLogin = () => {
    setIsLogin(!isLogin)
    if (!isLogin) {
      setIsOpen(true)
    }
  }

  return (
    <>
      <header>
        <h2>Food Blog</h2>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/myRecipe">My Recipe</NavLink></li>
          <li><NavLink to="/favRecipe">Favourites</NavLink></li>
          <li onClick={checkLogin}>
            <p className='login'>{isLogin ? "Login" : "Logout"}</p>
          </li>
        </ul>
      </header>
      {isOpen && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
    </>
  )
}
