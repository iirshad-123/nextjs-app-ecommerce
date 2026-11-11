"use client";

import ProductCard from "../components/product-card/ProductCard";
import { useSearch } from "../search/search";

export default function ProductsList({ products }: any) {
  const { searchTerm } = useSearch();

  const displayProducts = products.filter((p: any) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="prod-heading">products_list</h1>
      <div className="container">
        {displayProducts.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}