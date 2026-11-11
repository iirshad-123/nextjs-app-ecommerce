
import React from "react";
import ProductCard from "../components/product-card/ProductCard";
import "./product.css";
import { Suspense } from "react";

import ProductsList from "./productlist";
import { ProductService } from "../services/product-services";

async function getProducts() {

  const response = await ProductService.getProduct();
  // const data = await response.json();
  // return data.products;
  return response;
}

async function ProductsPage() {
  const products = await getProducts();
  return <ProductsList products={products} />;
}


export default function products() {
  return (
    <div>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <ProductsPage />
      </Suspense>
    </div>
  );
}
