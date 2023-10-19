import React from "react";
import { Link } from "react-router-dom";

const NavBar = React.memo(({ name }) => {
  return (
    <div className="bg-blue-500 shadow-md">
      <div className="container">
        <ul className="flex gap-4">
          <li className="py-4">
            <Link className="text-white hover:underline" to="/">
              Home
            </Link>
          </li>
          <li className="py-4">
            <Link className="text-white hover:underline" to="/recipes">
              Recipes
            </Link>
          </li>
          <li className="py-4">
            <Link className="text-white hover:underline" to="/add-recipes">
              Add Recipes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default NavBar;
