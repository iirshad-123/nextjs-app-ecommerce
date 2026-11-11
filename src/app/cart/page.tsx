"use client";

import { useCart } from "../context/cartcontext";
import './cart.css'
import{useSearch} from "../search/search";


export default function Cart() {
  const { searchTerm } = useSearch();
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total
  } = useCart();
  const displayCart=cart.filter((p: any) =>
  p.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
<div>
    <div className="cart-header">
        <h1>Cart</h1>
        <h6>Total: ${total.toFixed(2)}</h6>
      </div>
    <div className="cart-page">
      

     
        {displayCart.map((product: any) => (
          <div className="cart-container" key={product.id}>
            <div className="image-container">
              <img
                src={product.images[0]}
                className="cart-images"
                
              />
            </div>

            <div className="cart-body">
              <h5 className="cart-title">
                {product.title}
              </h5>

              {/* <div className="description-container">
                <p className="cart-description">
                  {product.description}
                </p>
              </div> */}
              <h4 className="prod-quantity">Quantity: {product.quantity}</h4>
              <h4 className="prod-category">Category: {product.category}</h4>

              <p className="card-text">
                ${product.price}
              </p>

              <div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>

                <span style={{ margin: "0 15px" }}>
                  {product.quantity}
                </span>

                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>

              <br />

              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {cart.length === 0 && <p>Your cart is empty!</p>}
      </div>
      </div>
    
  );
}