import React from "react";
import { Link } from "react-router";

const ProductCards = ({ data }) => {
  return (
    <article className="product-card">
      <img src={data.thumbnail} alt={data.title} className="product-image" />
      <div className="product-content">
        <h3>{data.title}</h3>
        <p className="product-category">{data.category}</p>
        <p className="product-price">${data.price}</p>
        <p className="product-rating">Rating: {data.rating}</p>
        <Link to={String(data.id)} className="view-more-btn">
          View More
        </Link>
      </div>
    </article>
  );
};

export default ProductCards;
