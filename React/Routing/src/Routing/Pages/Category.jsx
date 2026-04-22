import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCards from "../Components/ProductCards";

const Category = () => {
  const paramData = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${paramData.category}`,
        );
        setData(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [paramData.category]);

  if (loading) {
    return <h2 className="page-status">Loading category products...</h2>;
  }

  return (
    <section className="category-section">
      <h2 className="category-title">{paramData.category.replace("-", " ")}</h2>
      <div className="product-grid">
        {data.map((product) => (
          <ProductCards key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default Category;
