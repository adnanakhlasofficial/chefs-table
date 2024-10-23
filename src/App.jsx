import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import RecipesSection from "./components/RecipesSection";

const App = () => {
  return (
    <div className="container mx-auto px-4">
        {/* Navbar */}
        <Navbar />
        {/* Banner */}
        <Banner />
        {/* Recipes */}
        <RecipesSection />
    </div>
  );
};

export default App;