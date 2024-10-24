import RecipeCard from "./RecipeCard";
import PropTypes from 'prop-types';

const Recipes = ({ recipes, getRecipe }) => {
  return (
    <div className="w-2/3 flex flex-wrap gap-6 justify-center">
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
