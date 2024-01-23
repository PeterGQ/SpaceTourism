import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Station = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { productimage, Title, planet, review } = props.data;
  return (
    <div className="times2">
      <img src={productimage} />
      <div className="my-text-content">
        <h5>{Title}</h5>
        <p>{planet}</p>
        <h6>{review}</h6>
      </div>
    </div>
  );
};
