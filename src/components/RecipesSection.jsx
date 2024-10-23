import Recipes from "./Recipes";
import Sidebar from "./Sidebar";

const RecipesSection = () => {
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
        <Recipes />
        <Sidebar />
      </div>
    </div>
  );
};

export default RecipesSection;
