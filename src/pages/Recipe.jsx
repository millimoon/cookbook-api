import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useState, useEffect } from 'react';



function Recipe() {

    const [singleRecipe, setSingleRecipe] = useState([]);

    const {id} = useParams();

    const client = createClient({ space: `${import.meta.env.VITE_contentful_space_id}`, accessToken: `${import.meta.env.VITE_contentful_delivery_api_key}`});

    // Funktion zum Fetchen der API von Contentful:
    useEffect(() => {
        async function fetchRecipeById() {
            try {
                await client.getEntry(id).then((data) => {
                console.log(data)
                setSingleRecipe(data);
                });
        
            } catch (error) {
                console.error(error);
            }
        }
          
            fetchRecipeById();
        }, [id]);

    return (
        <>
            <div className='single-recipe'>
                <h2>{singleRecipe?.fields?.title}</h2>
                <img src={singleRecipe?.fields?.image.fields.file.url} alt="" />
                <div>{singleRecipe?.fields?.image.fields.description}</div>
                <h4>Info</h4>
                <div className="recipe-info">
                    {singleRecipe?.fields?.info && documentToReactComponents(singleRecipe.fields.info)}
                </div>
                <h4>Ingredients</h4>
                <div className="recipe-directions">
                    {singleRecipe?.fields?.ingredients && documentToReactComponents(singleRecipe.fields.ingredients)}
                </div>
                <h4 >Instructions</h4>
                <div className="recipe-directions">
                    {singleRecipe?.fields?.directions && documentToReactComponents(singleRecipe.fields.directions)}
                </div>
            </div>
        </>
    );
}

export default Recipe;
