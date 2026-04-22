import React from "react";
import { NavLink } from "react-router";

const ProductsNav = () => {
  const categoryLinks = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
  ];

  return (
    <div className="prod-nav">
      {categoryLinks.map((category) => (
        <NavLink key={category} to={`category/${category}`}>
          <div className="card category-card">
            <h1>{category.toUpperCase()}</h1>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ProductsNav;
