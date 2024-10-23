import Time from "../assets/time.svg"
import Burn from "../assets/burn.svg"

const RecipeCard = ({recipe}) => {
    return (
        <div className="p-6 border-2 rounded-2xl border-[#D4D4D4] max-w-96">
            <img className="w-full rounded-2xl" src={recipe.image_url} alt={recipe.name} />
            <p>{recipe.name}</p>
            <p>{recipe.description}</p>
            
            <p>Ingredients: {recipe.ingredients.length}</p>
            <ul className="list-disc ml-12">
                {recipe.ingredients.map((ingredient, idx)=> <li key={idx}>{ingredient}</li>)}
            </ul>

            <div className="flex gap-4">
                <span className="flex gap-2"><img src={Time} alt="Time" />{recipe.cooking_time} minutes</span>
                <span className="flex gap-2"><img src={Burn} alt="Burn" />{recipe.calories} calories</span>
            </div>
        </div>
    );
};

export default RecipeCard;