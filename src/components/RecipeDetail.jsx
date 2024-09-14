import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json';


export default function RecipeDetail() {
  const {id} = useParams();
  const [recipe,setRecipe] = useState(null);
  
  useEffect(()=> {
    const fetchRecipe = () => {
      const recipeData = data.find(recipe => recipe.id === parseInt(id));
      setRecipe(recipeData);
    }
    fetchRecipe();
  },[id])

  if(!recipe) return <div>Loading...</div>

  return (
    <div className='max-w-full mx-auto p-4 bg-white rounded-lg shadow-lg'>
      <h1 className='text-2xl font-bold mb-4 text-gray-800 md:text-3xl lg:text-4xl'>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className='w-full h-auto rounded-lg mb-4'/>
      <p className='text-base text-gray-700 mb-4 md:text-lg'>{recipe.summary}</p>
      <h2 className='text-xl font-semibold mb-2 text-gray-800 md:text-2xl'>Ingredients</h2>
      <ul className='list-disc pl-5 mb-4 text-gray-700 text-base md:text-lg'>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className='mb-1'>{ingredient}</li>
        ))}
      </ul>
      <h2 className='text-xl font-semibold mb-2 text-gray-800 md:text-2xl'>Cooking Instructions</h2>
      <ol className='list-decimal pl-5 text-gray-700 text-base md:text-lg'>
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className='mb-1'>{instruction}</li>
        ))}
      </ol>
    </div>
  )
}
