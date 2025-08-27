import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import requests from "../api/apiClient";

function Products() {
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // const response = await requests.products.list()
        // const data = await response.json();
        const data = await requests.products.list();
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
