import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { ShopContext } from "../../context/shopMath";

export const Items = ({
  id,
  productName,
  price,
  productimage,
  rating,
  description,
}) => {
  //const { id, productName, price, productimage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <Col sm={6} md={3}>
      <div className="model">
        <img src={productimage} />
        <div className="text-content">
          <h4>{productName}</h4>
          <span>${price}</span>
          <br />
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
          </button>
        </div>
      </div>
      <div className="story">
        <h5>{rating}</h5>
        <span>{description}</span>
      </div>
    </Col>
  );
};
