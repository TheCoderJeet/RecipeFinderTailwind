import React, { useState, useEffect } from "react";
import axios from "axios";

const Recipes = React.memo(({}) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchInput, setSearchKey] = useState("");
  const handleSearch = async () => {
    axios
      .get("/recipes", {
        params: {
          searchInput,
        },
      })
      .then((response) => {
        if (response) {
          setAllRecipes(response.data);
        }
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      });
  };

  const searchData = (e) => {
    let val = e.target.value;
    setSearchKey(val);
  };

  const clearSearch = () => {
    setAllRecipes([]);
  };

  useEffect(() => {
    return () => {
      // cleanup
    };
  }, [allRecipes]);
  return (
    <div className="container my-20">
      {allRecipes.length ? (
        <div>
          <button
            className="bg-gray-500 text-white py-2 px-4 text-base hover:bg-gray-600 rounded mb-4 float-right"
            onClick={clearSearch}
          >
            Back to search
          </button>
          <h1 className="w-full text-2xl font-bold uppercase text-blue-400">
            Available Recipes
          </h1>
          <div className="grid grid-cols grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {allRecipes.map((recipe, index) => (
              <div className="shadow-md" key={index}>
                <div className="max-h-[150px] overflow-hidden mb-4 relative">
                  <img
                    src={recipe.thumbnail}
                    className="relative z-80"
                    alt="Recipe Thumbnail"
                  />
                  <span className="text-sm text-gray-600 absolute bottom-4 right-4 z-90 bg-white rounded px-4 py-1 shadow-md inline-block text-blue-500 font-bold border-2 border-blue-500">
                    {recipe.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-2xl">{recipe.title} </h2>
                  <p className="line-clamp-2">{recipe.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold uppercase text-blue-400">
            Search for your recipes.
          </h2>
          <div className="flex mt-4">
            <input
              className="w-full border-2 border-blue-500 focus:border-blue-600 text-xl text-gray-600 focus:outline-none rounded p-4"
              type="text"
              value={searchInput}
              onChange={searchData}
            />
            <button
              className="bg-blue-500 px-4 py-2 ml-2 text-white min-w-[150px] rounded"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default Recipes;
