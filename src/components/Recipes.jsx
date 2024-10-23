import { useEffect } from "react";
import { useState } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch("/recipe.json")
        .then(res => res.json())
        .then(data => setRecipes(data.recipes))
    } ,[])

    console.log(recipes);
    return (
        <div className="w-2/3 flex flex-wrap gap-6 justify-center">
            {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};

export default Recipes;