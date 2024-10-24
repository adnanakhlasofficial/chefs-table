import Time from "../assets/time.svg";
import Burn from "../assets/burn.svg";

import PropTypes from 'prop-types';

const RecipeCard = ({ recipe, getRecipe}) => {
  return (
    <div className="p-6 border-2 rounded-2xl border-[#D4D4D4] min-w-72 space-y-4 divide-y divide-[#E9E9E9]">
      <div>
        <img
          className="w-full h-52 object-cover object-center rounded-2xl"
          src={recipe.image_url}
          alt={recipe.name}
        />
      </div>

      <div className="pt-4 space-y-4 min-h-[8.75rem]">
        <h2 className="card-title">{recipe.name}</h2>
        <p className="card-desc">{recipe.description}</p>
      </div>

      <div className="pt-4 space-y-4">
        <h3 className="card-sub-title">Ingredients: {recipe.ingredients.length}</h3>
        <ul className="list-disc ml-10 text-gray space-y-2">
          {recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 pt-4 text-medium_gray">
        <span className="flex gap-2">
          <img src={Time} alt="Time" />
          {recipe.cooking_time} minutes
        </span>
        <span className="flex gap-2">
          <img src={Burn} alt="Burn" />
          {recipe.calories} calories
        </span>
      </div>

      <div className="pt-4">
        <button onClick={() => getRecipe(recipe)} className="btn card-btn w-full">Want To Cock</button>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired,
    getRecipe: PropTypes.func.isRequired
}

export default RecipeCard;
