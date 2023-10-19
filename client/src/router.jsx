import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./admin/login";
import HomeComponent from "./components/Home/HomeComponent";
import NavBar from "./components/Nav";
import Recipes from "./components/Recipes";
import AddRecipes from "./components/Recipes/addRecipes";

function Routers() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/add-recipes" element={<AddRecipes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;
