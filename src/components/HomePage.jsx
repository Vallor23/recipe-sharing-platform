import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const Homepage = () => {
    const [recipes,setRecipes] = useState([]);

    useEffect( () => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('/src/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                setRecipes(data);
            } catch (error) {
                console.error('Fetch Error:', error)
            }  
        }
        fetchRecipes();
    }, []);
    //Debug
    useEffect(() => {
        console.log(recipes);
      }, [recipes]);

  return (
    <div className='container mx-auto'>
    
        <div className=' grid gap-4 sm:gap-6 md:gap-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between'>
        {recipes.length > 0 ? 
        (recipes.map((recipe) => (
            // recipe-card
            <div key={recipe.id} className='bg-white text-center p-4 rounded shadow-lg transform hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:bg-gray-100 duration-300 '>
                <h2 className='text-xl tracking-wide font-bold mt-2'>{recipe.title}</h2>
                <p className='mt-2'>{recipe.summary}</p>
                <img src={recipe.image} alt={recipe.tittle} className='mt-4 mx-auto w-40 h-40'/>
                <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </div>  
        ))
        ) : (
            <p>No recipe found</p>
        )}
    </div>
    </div>
  )
}

export default Homepage;