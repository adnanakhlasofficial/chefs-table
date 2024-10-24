import Recipes from "./Recipes";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useState } from "react";

const RecipesSection = () => {

  const [recipes, setRecipes] = useState([]);
  const [recipeQueue, setRecipeQueue] = useState([]);

    useEffect(()=>{
        fetch("/recipe.json")
        .then(res => res.json())
        .then(data => setRecipes(data.recipes))
    } ,[])

    const getRecipe = (recipe) => {
      const isExist = recipeQueue.find(prevRecipe => prevRecipe.id === recipe.id)
      console.log(isExist);
      !isExist ? setRecipeQueue([...recipeQueue, recipe]) : alert("Recipe has already been added.");
    }
    
    
  return (
    <div className="my-24">
      <div className="max-w-[51rem] mx-auto space-y-6">
        <h2 className="title">Our Recipes</h2>
        <p className="desc text-light_purple">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>

      <div className="flex mt-12">
        <Recipes recipes={recipes} getRecipe={getRecipe} />
        <Sidebar recipeQueue={recipeQueue} />
      </div>
    </div>
  );
};

export default RecipesSection;
