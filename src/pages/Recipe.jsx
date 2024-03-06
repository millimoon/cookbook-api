import {useParams} from 'react-router-dom';

function Recipe() {
    const {recipeId} = useParams();

    return (
        <div className='single-recipe'>
            <h2></h2>
            <img src="" alt="" />
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
            <h4>Instructions</h4>
            <div></div>
        </div>
    );
}

export default Recipe;