import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./ImageSlider.css";

export const ImageSlider = (props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { images } = props;
  function showPrev () {
    setImageIndex(index => {
      if(index === 0) return images.length - 1
      return index - 1
    })
  }

  function showNext () {
    setImageIndex(index => {
      if(index === images.length - 1) return 0
      return index + 1
    })
  }
  return (
    <div className="slide" style={{width: "750px",height: "550px", position: "relative"}}>
      <img className="sliders" src={images[imageIndex]} />
      <button onClick={showPrev} className="sliderBttn" style={{left:0}}>
        <ArrowBigLeft />
      </button>
      <button onClick={showNext} className="sliderBttn" style={{right:0}}>
        <ArrowBigRight />
      </button>
    </div>
  );
};
