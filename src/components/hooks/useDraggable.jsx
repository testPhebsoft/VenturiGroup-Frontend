"use client";
import React, { useState, useRef, useEffect } from "react";

const useDraggable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (e) => {
      console.log(e);
      const startX = e.pageX - position.x;
      const startY = e.pageY - position.y;
      // console.log(startX, startY);
      const handleMouseMove = (e) => {
        e.preventDefault();
        setPosition({
          x: e.pageX - startX,
          y: e.pageY - startY,
        });
      };

      const handleMouseUp = () => {
        setDragging(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      setDragging(true);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    if (componentRef.current) {
      document.current.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (componentRef.current) {
        document.current.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [position]);

  return {
    ref: componentRef,
    style: {
      cursor: dragging ? "grabbing" : "grab",
      position: "absolute",
      top: position.y,
      left: position.x,
    },
  };
};

export default useDraggable;
