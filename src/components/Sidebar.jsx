import PropTypes from "prop-types";

const Sidebar = ({
  recipeQueue,
  prepareRecipe,
  preparedRecipe,
  caculateTimeAndCalories,
  totalCalories,
  totalTime,
}) => {
  console.log(preparedRecipe);
  return (
    <div className="w-full md:w-[40%] p-8 border-2 border-[#D4D4D4] rounded-2xl">
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-semibold text-center border-b-2 border-b-[#DFDFDF] pb-4">
          Want To Cook: {recipeQueue.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.name}</td>
                <td className="text-center">{recipe.cooking_time} minutes</td>
                <td className="text-center">{recipe.calories} calories</td>
                <td>
                  <button
                    onClick={() => {
                      prepareRecipe(recipe.id);
                      caculateTimeAndCalories(
                        recipe.cooking_time,
                        recipe.calories
                      );
                    }}
                    className="btn-secondary"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mt-8">
        <h2 className="text-2xl font-semibold text-center border-b-2 border-b-[#DFDFDF] pb-4">
          Currently Cooking: {preparedRecipe.length}
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.name}</td>
                <td>{recipe.cooking_time} minutes</td>
                <td>{recipe.calories} calories</td>
              </tr>
            ))}
            <tr>
              <td className="font-bold">Total: </td>
              <td></td>
              <td>{totalTime} minutes</td>
              <td>{totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array.isRequired,
  preparedRecipe: PropTypes.object.isRequired,
  prepareRecipe: PropTypes.func.isRequired,
  caculateTimeAndCalories: PropTypes.func.isRequired,
  totalCalories: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
};

export default Sidebar;
