import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import DisplayRecipes from '../ui/DisplayRecipes';

function Breakfast() {

    const [breakfastRecipes, setBreakfastRecipes] = useState([]);

    const client = createClient({ space: `${import.meta.env.VITE_contentful_space_id}`, accessToken: `${import.meta.env.VITE_contentful_delivery_api_key}`});

    // Funktion zum Fetchen der API von Contentful:
    useEffect(() => {
    async function fetchData() {
        try {
          await client.getEntries().then((data) => {
            const filteredRecipes = data.items.filter(recipe => recipe.fields.typeOfFood === 1);
            console.log(filteredRecipes)
            setBreakfastRecipes(filteredRecipes);
          });

        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);

    return (
        <div className="recipe-card-container">
        {breakfastRecipes?.map((recipe) => (
            <Link key={recipe.sys.id} to={`/${recipe.sys.id}`}>
                <DisplayRecipes recipe={recipe} />
            </Link>
        ))}
        </div>
    );
}

export default Breakfast;
