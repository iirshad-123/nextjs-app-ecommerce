"use client";

import { useCart } from "../../context/cartcontext";
import { useRouter } from "next/navigation";

function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();
  const router = useRouter();

  function handleAddToCart() {
    addToCart(product);
    router.push("/cart");
  }

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCartButton;