import RecipeCard from "./RecipeCard";
import PropTypes from 'prop-types';

const Recipes = ({ recipes, getRecipe }) => {
  return (
    <div className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} getRecipe={getRecipe} />
      ))}
    </div>
  );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    getRecipe: PropTypes.func.isRequired
}

export default Recipes;
