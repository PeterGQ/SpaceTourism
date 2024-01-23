import React, { useContext } from "react";
import { ShopContext } from "../../context/shopMath";
import { CartItem } from "./cartItem";
import product1 from "../../assets/solo.jpg";
import product2 from "../../assets/duos.jpg";
import product3 from "../../assets/trios.jpg";
import product4 from "../../assets/quads.jpg";
import stripe from "../../assets/stripe.png";
import gpay from "../../assets/GPay.png";
import paypal from "../../assets/Paypal.png";
//import { PRODUCTS } from "../../products";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotal } = useContext(ShopContext);
  const totalAmount = getTotal();
  const PRODUCTS = [
    {
      id: 1,
      productName: "Single",
      price: 999.0,
      productimage: product1,
      rating: "8.8/10 (23,680)",
      description: "Solo traveler? Experience a journey through the stars.",
    },
    {
      id: 2,
      productName: "Group of 2",
      price: 1799.0,
      productimage: product2,
      rating: "9.9/10 (20,453)",
      description:
        "Have a duo? This flight option might be for you. With a view of world, nothing could mess the day up.",
    },
    {
      id: 3,
      productName: "Group of 3",
      price: 2500.0,
      productimage: product3,
      rating: "9.2/10 (15,974)",
      description: "Trios? No problem.",
    },
    {
      id: 4,
      productName: "Group of 4",
      price: 3450.0,
      productimage: product4,
      rating: "9.7/10 (10,350)",
      description:
        "Is the squad traveling? whether you are a family of 4 or just friends , we got room.",
    },
  ];
  return (
    <div className="cart">
      <div>
        <h1> Payment Method</h1>
      </div>
      <div className="products">
        <h1>Cart items:</h1>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="payment">
        <button>
          <img src={paypal} alt="" />
        </button>
        <button>
          <img src={stripe} alt="" />
        </button>
        <button>
          <img src={gpay} alt="" />
        </button>
      </div>
      <div className="price">
        {totalAmount > 0 ? (
          <div className="checkout">
            <h3>Payment Details</h3>
            <h5>Subtotal: ${totalAmount} </h5>
            <p>taxes: $50.99</p>
            <p>flight fee $44.22</p>
            <h5>Total: ${totalAmount + 95.21}</h5>
            <p>Pay now: ${totalAmount + 50.99}</p>
            <p>Pay at flight station: $44.22</p>
            <h6>
              *due to the nature of planning each flight all sales are final. no
              refunds will be permitted under any circumstances.
            </h6>
          </div>
        ) : (
          <h1>Empty Cart</h1>
        )}
      </div>
    </div>
  );
};
