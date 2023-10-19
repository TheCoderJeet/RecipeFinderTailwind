import express from "express";
const router = express.Router();
import "../db/database.js";

import Recipe from "../models/Recipe.js";

router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
});

router.post("/addRecipe", async (req, res) => {
  const { title, ingradients, duration, thumbnail, details } = req.body;
  if (!title || !ingradients || !duration || !thumbnail || !details) {
    return res
      .status(422)
      .json({ error: "Please input requested feilds properly" });
  }
  try {
    const recipe = new Recipe({
      title,
      ingradients,
      duration,
      thumbnail,
      details,
    });
    const recipeRes = await recipe.save();
    if (recipeRes) {
      res.status(201).json({ msg: "successful" });
    }
  } catch (error) {
    return res(error);
  }
});
router.get("/recipes", async (req, res) => {
  try {
    const recipeList = await Recipe.find({
      ingradients: { $regex: req.query.searchInput },
    });
    if (recipeList) {
      return res.json(recipeList);
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
