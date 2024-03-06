function DisplayRecipes({recipe}) {
    return (
        <div className='display-recipes'>
            <img src={recipe.picture} alt={recipe.title} />
            <figcaption>{recipe.title}</figcaption>
        </div>
    );
}

export default DisplayRecipes;