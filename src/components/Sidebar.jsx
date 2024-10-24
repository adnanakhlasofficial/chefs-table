import PropTypes from "prop-types";

const Sidebar = ({ recipeQueue }) => {
  // console.log(recipeQueue);
  return (
    <div className="w-full md:w-[40%] p-8 border-2 border-[#D4D4D4] rounded-2xl">
      <h2 className="text-2xl font-semibold text-center border-b-2 border-b-[#DFDFDF] pb-4">
        Want To Cook: {recipeQueue.length}
      </h2>

      <div className="overflow-x-auto">
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
           {recipeQueue.map((recipe, idx) => <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{recipe.name}</td>
              <td>{recipe.cooking_time} minutes</td>
              <td>{recipe.calories} calories</td>
              <td><button className="btn btn-secondary">Preparing</button></td>
            </tr>)}
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.object.isRequired,
};

export default Sidebar;
