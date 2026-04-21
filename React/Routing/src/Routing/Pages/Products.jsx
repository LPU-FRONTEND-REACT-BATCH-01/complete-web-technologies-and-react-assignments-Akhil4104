import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCards from "../Components/ProductCards";

const Products = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const categories = ["beauty", "fragrances", "furniture", "groceries"];

  useEffect(() => {
    const fetchData = async () => {
      let tempData = {};

      try {
        for (let i = 0; i < categories.length; i++) {
          const category = categories[i];

          const response = await axios.get(
            `https://dummyjson.com/products/category/${category}?limit=4`
          );
          tempData[category] = response.data.products;
        }

        setProducts(tempData);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading categories...</h2>;
  }

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {(products[category] || []).map((item) => (
            <ProductCards key={item.id} data={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Products;