function DisplayRecipes({recipe}) {
    return (
        <div className='recipe-card'>
            <img className="recipe-image"src={recipe.fields.image.fields.file.url} alt={recipe.fields.title} />
            <figcaption className="recipe-caption">{recipe.fields.title}</figcaption>
        </div>
    );
}

export default DisplayRecipes;
