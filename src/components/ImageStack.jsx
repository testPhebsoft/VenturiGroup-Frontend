"use client";
import React, { useState, useRef } from "react";

const ImageStack = ({ images }) => {
  const [delays, setDelays] = useState([0, 50, 100, 150, 200]); // Delays for each image animation (ms)
  const [durations, setDurations] = useState([800, 850, 900, 950, 1000]); // Durations for each image animation (ms)
  const imageRefs = useRef([]); // Array of refs for each image element

  const handleMouseOver = (index) => {
    imageRefs.current[index].style.animationPlayState = "running";
  };

  const handleMouseLeave = (index) => {
    imageRefs.current[index].style.animationPlayState = "paused";
  };

  return (
    <div className="image-stack">
      {images.map((image, index) => (
        <img
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          src={image}
          alt={`Image ${index + 1}`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          style={{
            animation: `rollover ${durations[index]}ms ease-in-out forwards alternate`,
            animationDelay: `${delays[index]}ms`,
          }}
        />
      ))}
    </div>
  );
};

const rolloverAnimation = `
  @keyframes rollover {
    0% { transform: translateX(0px) rotateY(0deg); }
    50% { transform: translateX(5px) rotateY(2deg); }
    100% { transform: translateX(0px) rotateY(0deg); }
  }
`;

const styles = document.createElement("style");
styles.textContent = rolloverAnimation;
document.head.appendChild(styles);

export default ImageStack;
