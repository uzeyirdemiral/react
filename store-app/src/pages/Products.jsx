import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";

function Products() {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setLoadedProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading message="yükleniyor.." />;
  }

  return <ProductList products={loadedProducts} />;
}

export default Products;
