import PropTypes from "prop-types";

const Sidebar = ({recipeQueue}) => {
    // console.log(recipeQueue);
    return (
        <div className="w-1/3 p-8 border-2 border-[#D4D4D4] rounded-2xl">
            <h2 className="text-2xl font-semibold text-center border-b-2 border-b-[#DFDFDF] pb-4">Want To Cook: {recipeQueue.length}</h2>
        </div>
    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.object.isRequired
}

export default Sidebar;