import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ViewMore = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setProduct(null);

      try {
        if (category) {
          const res = await axios.get(
            `https://dummyjson.com/products/category/${category}`
          );

          const matchedProduct = res.data.products.find(
            (item) => String(item.id) === id
          );

          setProduct(matchedProduct || null);
        } else {
          const res = await axios.get(`https://dummyjson.com/products/${id}`);
          setProduct(res.data);
        }
      } catch (error) {
        console.log(error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [category, id]);

  if (loading) {
    return <h2 className="page-status">Loading product details...</h2>;
  }

  if (!product) {
    return <h2 className="page-status">Product not found.</h2>;
  }

  return (
    <section className="view-more-section">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <div className="product-content">
        <h2>{product.title}</h2>
        <p className="product-category">{product.category}</p>
        <p>{product.description}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-rating">Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
      </div>
    </section>
  );
};

export default ViewMore;
