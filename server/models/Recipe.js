import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingradients: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model("RECIPE", RecipeSchema);

export default Recipe;
