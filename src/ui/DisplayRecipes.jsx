function DisplayRecipes({recipe}) {
    return (
        <div className='recipe-card'>
            <img className="recipe-image"src={recipe.picture} alt={recipe.title} />
            <figcaption class="recipe-caption">{recipe.title}</figcaption>
        </div>
    );
}

export default DisplayRecipes;
