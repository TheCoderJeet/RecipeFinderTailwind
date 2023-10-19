import React, { useState } from "react";
import axios from "axios";
import FileBase from "react-file-base64";

const AddRecipes = React.memo(({}) => {
  const [successTimer, setSuccessTimer] = useState(false);
  const [recipeData, setRecipeData] = useState({
    title: "",
    ingradients: "",
    duration: "",
    thumbnail: "",
    details: "",
  });
  let name = "";
  let value = "";
  const inputVal = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const submitRecipe = () => {
    let checkSubmit = "";
    axios
      .post("/addRecipe", recipeData, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.msg === "successful") {
          setRecipeData({
            title: "",
            ingradients: "",
            duration: "",
            thumbnail: "",
            details: "",
          });
          setSuccessTimer(true);
          setTimeout(() => {
            setSuccessTimer(false);
          }, 1500);
        }
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      });
  };

  return (
    <div className="">
      <div className="container">
        <div className="mt-8 mx-auto p-4 shadow-xl border border-[#eee]">
          <div className="mx-auto max-w-[500px] mb-3">
            <label className="block mb-2 text-gray-600" htmlFor="title">
              Title
            </label>
            <input
              className="block border border-[#ccc] rounded h-50px w-full shadow-none focus:outline-none py-2 px-4"
              id="title"
              type="text"
              name="title"
              value={recipeData.title}
              onChange={inputVal}
              required
            />
          </div>
          <div className="mx-auto max-w-[500px] mb-3">
            <label className="block mb-2 text-gray-600" htmlFor="ingradients">
              Ingradients
            </label>
            <input
              className="block border border-[#ccc] rounded h-50px w-full shadow-none focus:outline-none py-2 px-4"
              id="ingradients"
              type="text"
              name="ingradients"
              value={recipeData.ingradients}
              onChange={inputVal}
              required
            />
          </div>
          <div className="mx-auto max-w-[500px] mb-3">
            <label className="block mb-2 text-gray-600" htmlFor="duration">
              Recipe duration
            </label>
            <input
              className="block border border-[#ccc] rounded h-50px w-full shadow-none focus:outline-none py-2 px-4"
              id="duration"
              type="text"
              name="duration"
              value={recipeData.duration}
              onChange={inputVal}
              required
            />
          </div>
          <div className="mx-auto max-w-[500px] mb-3">
            <label className="block mb-2 text-gray-600" htmlFor="thumbnail">
              Add thumbnail
            </label>
            <FileBase
              className="block border border-[#ccc] rounded h-50px w-full shadow-none focus:outline-none py-2 px-4"
              type="file"
              id="thumbnail"
              name="thumbnail"
              multiple={false}
              value={recipeData.thumbnail}
              onChange={inputVal}
              onDone={({ base64 }) =>
                setRecipeData({ ...recipeData, thumbnail: base64 })
              }
            />
          </div>
          <div className="mx-auto max-w-[500px] mb-3">
            <label className="block mb-2 text-gray-600" htmlFor="details">
              Recipe details
            </label>
            <textarea
              className="block border border-[#ccc] rounded h-50px w-full shadow-none focus:outline-none py-2 px-4"
              id="details"
              name="details"
              value={recipeData.details}
              onChange={inputVal}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="my-3 bg-blue-500 py-2 px-4 rounded text-white hover:opacity-90"
              onClick={submitRecipe}
            >
              Add Recipe
            </button>
          </div>
          {successTimer ? (
            <div className="text-center bg-green-500 text-white rounded p-4 w-full">
              {" "}
              Data sunmitted successfully!!!
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
});

export default AddRecipes;
