import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import ProductItem from "../components/ProductItem";
import requests from "../api/apiClient";

function ProductDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // const response = await fetch("http://localhost:5000/products/" + id);
        // const data = await response.json();
        const data = await requests.products.details(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!product) {
    return <h2>Ürün bulunamadi</h2>;
  }

  return <ProductItem product={product} />;
}

export default ProductDetails;
