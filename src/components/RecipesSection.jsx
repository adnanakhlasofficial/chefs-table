import Recipes from "./Recipes";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useState } from "react";

const RecipesSection = () => {

  const [recipes, setRecipes] = useState([]);
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

    useEffect(()=>{
        fetch("/recipe.json")
        .then(res => res.json())
        .then(data => setRecipes(data.recipes))
    } ,[])

    const getRecipe = (recipe) => {
      const isExist = recipeQueue.find(prevRecipe => prevRecipe.id === recipe.id)
      !isExist ? setRecipeQueue([...recipeQueue, recipe]) : alert("Recipe has already been added.");
    }

    const prepareRecipe = (id) => {
      // Find recipe want to delete
      const deletedRecipe = recipeQueue.find(recipe => recipe.id === id);
      setPreparedRecipe([...preparedRecipe, deletedRecipe]);

      const updatedRecipeQueue = recipeQueue.filter(recipe => recipe.id !== id);
      setRecipeQueue(updatedRecipeQueue)

      
    }

    const caculateTimeAndCalories = (time, calories) => {
      setTotalTime(totalTime + time);
      setTotalCalories(totalCalories + calories);
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

      <div className="flex flex-col-reverse md:flex-row mt-12 gap-6">
        <Recipes recipes={recipes} getRecipe={getRecipe} />
        <Sidebar recipeQueue={recipeQueue} prepareRecipe={prepareRecipe} preparedRecipe={preparedRecipe} caculateTimeAndCalories={caculateTimeAndCalories} totalCalories={totalCalories} totalTime={totalTime}/>
      </div>
    </div>
  );
};

export default RecipesSection;
