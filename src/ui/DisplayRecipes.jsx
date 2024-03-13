function DisplayRecipes({recipe}) {
    return (
        <div className='recipe-card'>
            <figcaption className="recipe-caption">{recipe.fields.title}</figcaption>
            <img className="recipe-image"src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />
            <div className="recipe-teaser">{recipe.fields.image.fields.description}</div>
        </div>
    );
}

export default DisplayRecipes;
