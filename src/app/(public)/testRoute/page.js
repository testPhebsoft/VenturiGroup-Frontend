"use client";

import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [positions, setPositions] = useState({});
  let data = [
    {
      image: "/customer1.jpeg",
    },
    {
      image: "/customer2.jpeg",
    },
    {
      image: "/customer3.jpeg",
    },
    {
      image: "/customer1.jpeg",
    },
    {
      image: "/customer2.jpeg",
    },
    {
      image: "/customer3.jpeg",
    },
    {
      image: "/customer1.jpeg",
    },
    {
      image: "/customer2.jpeg",
    },
    {
      image: "/customer1.jpeg",
    },
    {
      image: "/customer2.jpeg",
    },
    {
      image: "/customer3.jpeg",
    },

    {
      image: "/customer3.jpeg",
    },
  ];

  useEffect(() => {
    const numImages = 5; // Adjust the number of images as needed
    const imageWidth = 20;
    const containerWidth = 400;
    const containerHeight = 400;
    const speed = 1; // pixels per second

    // Create the images and initial positions
    const newImages = [];
    const newPositions = {};
    for (let i = 0; i < numImages; i++) {
      newImages.push(
        <img key={i} src="(link unavailable)" alt={`Image ${i}`} />
      );
      newPositions[i] = {
        x: Math.random() * (containerWidth - imageWidth),
        y: Math.random() * (containerHeight - imageWidth),
        vx: Math.random() * speed * (Math.random() < 0.5 ? -1 : 1),
        vy: Math.random() * speed * (Math.random() < 0.5 ? -1 : 1),
      };
    }
    setImages(newImages);
    setPositions(newPositions);
  }, []);

  useEffect(() => {
    let lastUpdate = performance.now(); // Use performance.now() for more accurate timing

    function updatePositions(timestamp) {
      const timeDelta = timestamp - lastUpdate; // Calculate timeDelta based on the current timestamp
      if (timeDelta >= 16) {
        // approximately 60 FPS
        const newPositions = { ...positions };
        Object.keys(newPositions).forEach((key) => {
          const position = newPositions[key];

          position.x += (position.vx > 0 ? 1 : -1 * 2) / 1000;
          position.y += (position.vy > 0 ? 1 : -1 * 2) / 1000;

          // Collision detection and response
          // if (
          //   Object.keys(newPositions).map((key) =>
          //     Object.keys(newPositions).some(
          //       (checkKey) =>
          //         newPositions[checkKey].x -
          //           (newPositions[key].x * newPositions[key].vx > 0 ? 1 : -1) >
          //         30
          //     )
          //   )
          // ) {
          //   position.x += (position.vx > 0 ? -1 : 1 * 12) / 1000;
          //   position.y += (position.vy > 0 ? -1 : 1 * 12) / 1000;
          // }

          if (position.x <= 0) {
            position.x = 0;
            position.vx = -position.vx;
          } else if (position.x + 20 >= 400) {
            position.x = 380; // Prevent the image from moving out of the boundary
            position.vx = -position.vx;
          }
          if (position.y <= 0) {
            position.y = 0;
            position.vy = -position.vy;
          } else if (position.y + 20 >= 400) {
            position.y = 380; // Prevent the image from moving out of the boundary
            position.vy = -position.vy;
          }
        });
        console.log(newPositions);
        setPositions(newPositions);
        lastUpdate = timestamp; // Update the lastUpdate to the current timestamp
      }
      requestAnimationFrame(updatePositions);
    }
    const animationFrameId = requestAnimationFrame(updatePositions);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [positions]);
  // Dependency on positions

  return (
    <div
      style={{
        width: 400,
        height: 400,
        border: "1px solid black",
        position: "relative",
      }}
    >
      {images.map((image, index) =>
        positions[index] ? (
          <div
            key={index}
            style={{
              position: "absolute",
              top: positions[index].y,
              left: positions[index].x,
            }}
          >
            {image}
          </div>
        ) : null
      )}
    </div>
  );
}

export default App;
