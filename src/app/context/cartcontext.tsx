"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  function addToCart(product: any) {
    const found = cart.find((item: any) => item.id === product.id);

    if (found) {
      found.quantity++;
      setCart([...cart]);
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  }
  function removeFromCart(productId: number) {
    setCart(cart.filter((product) => product.id !== productId));
  }

  function increaseQuantity(id: number) {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });

    setCart(newCart);
  }

  function decreaseQuantity(id: number) {
    const newCart = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }

      return product;
    });

    setCart(newCart);
  }

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
