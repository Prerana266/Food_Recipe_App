import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import AddFoodRecipe from './pages/AddFoodRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeDetails from './pages/RecipeDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/myRecipe', element: <Home /> },
      { path: '/favRecipe', element: <Home /> },
      { path: '/addRecipe', element: <AddFoodRecipe /> },
      { path: '/editRecipe/:id', element: <EditRecipe /> },
      { path: '/recipe/:id', element: <RecipeDetails /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
