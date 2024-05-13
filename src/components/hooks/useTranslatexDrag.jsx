"use client";
import React, { useState, useRef, useEffect } from "react";

const useTranslatexDraggable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const componentRef = useRef(null);
  console.log(position);
  useEffect(() => {
    const handleMouseDown = (e) => {
      console.log(e);
      const startX = e.pageX - position.x;
      const startY = e.pageY - position.y;

      const handleMouseMove = (e) => {
        console.log(e, componentRef.current.boundingClientRect);
        e.preventDefault();
        setPosition({
          x: e.pageX - startX,
          y: e.pageY - startY,
        });
      };

      const handleMouseUp = () => {
        setDragging(false);
        componentRef.current.removeEventListener("mousemove", handleMouseMove);
        componentRef.current.removeEventListener("mouseup", handleMouseUp);
        // componentRef.current.removeEventListener("mouseup", handleMouseUp);
      };

      setDragging(true);

      componentRef.current.addEventListener("mouseup", handleMouseUp);
      componentRef.current.addEventListener("mousemove", handleMouseMove);
      // document.addEventListener("mousemove", handleMouseMove);
    };

    if (componentRef.current) {
      componentRef.current.addEventListener("mousedown", handleMouseDown);
    }

    return () => {
      if (componentRef.current) {
        componentRef.current.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [position]);

  return {
    ref: componentRef,
    style: {
      cursor: dragging ? "grabbing" : "grab",
      transform: `translate3d(${position.x}px,0px,0px)`,
    },
  };
};

export default useTranslatexDraggable;
