import React from "react";
//import { PRODUCTS } from "../../products";
import { Items } from "./items";
import { Row, Col } from "react-bootstrap";
import "./shop.css";
import product1 from "../../assets/solo.jpg";
import product2 from "../../assets/duos.jpg";
import product3 from "../../assets/trios.jpg";
import product4 from "../../assets/quads.jpg";

export const Shop = () => {
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
    <section className="flight-shop">
      <Row>
        <Col>
          <h2>Space Flights</h2>
          <p>Flights Start at $999</p>
          <h6>
            *Flights like Duo, Trio and Squad guarantee seats next to one
            another. Multiple single flights do not.
          </h6>
          <div className="cart-items">
            <Row>
              {PRODUCTS.map((product, index) => (
                <Items key={index} {...product} />
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
};
