import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container mx-auto px-4">
        {/* Navbar */}
        <Navbar />
        {/* Banner */}
        <Banner />
        {/* Recipes */}
    </div>
  );
};

export default App;