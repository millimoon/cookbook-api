import {useParams} from 'react-router-dom';
import { createClient } from 'contentful';
import { useState, useEffect } from 'react';



function Recipe() {

    const [singleRecipe, setSingleRecipe] = useState([]);

    const {id} = useParams();

    const client = createClient({ space: "nnt03141ba77", accessToken: "PCRGPCygtuhW86qDCq1bGMTvEpuaqM4PaEVCfQRAJDI"});

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
                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <h4>Instructions</h4>
                <div></div>
            </div>
        </>
    );
}

export default Recipe;