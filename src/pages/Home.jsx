import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DisplayRecipes from '../ui/DisplayRecipes';

function Home() {

    const [recipes, setRecipes] = useState([]);

    // Funktion zum Fetchen der API von Contentful:
    useEffect(() => {
    async function fetchData() {
        try {
          const getRecipes = await client.getEntries({ content_type: ''});
          if (!getRecipes.ok) throw new Error(`Request failed with a status of ${getRecipes.status}`);
          const parseData = await getRecipes.json();
          setRecipes(parseData);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);

    return (
        <div className="recipe-card-container">
        {recipes.map((recipe) => (
            <Link key={recipe.id} to={`/${recipe.id}`}>
                <DisplayRecipes recipe={recipe} />
            </Link>
        ))}
        </div>
    );
}

export default Home;
