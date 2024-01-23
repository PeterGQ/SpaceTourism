import React, { useContext } from "react";
import { ShopContext } from "../../context/shopMath";

export const CartItem = (props) => {
  const { id, productName, price, productimage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productimage} />
      <div className="description">
        <h5>
          <b>{productName}</b>
        </h5>
        <p>${price}</p>
        <div className="countHandler">
          <h6>QTY:</h6>
          <button
            className="removeFromCartBttn"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input value={cartItems[id]} />
          <button className="addToCartButtn" onClick={() => addToCart(id)}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
