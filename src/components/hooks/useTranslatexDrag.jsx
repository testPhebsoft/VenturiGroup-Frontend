"use client";
import React, { useState, useRef, useEffect } from "react";

const useTranslatexDraggable = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const componentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (e) => {
      const startX = e.pageX - position.x;
      const startY = e.pageY - position.y;

      const handleMouseMove = (e) => {
        e.preventDefault();
        setPosition({
          x: e.pageX - startX,
          y: e.pageY - startY,
        });
        console.log(position.x);
      };

      const handleMouseUp = () => {
        const childWidth = childRef.current.offsetWidth;
        console.log("childWidth", childWidth);
        const halfChildWidth = childWidth / 2;

        // Check if the absolute position is more than half the child's width
        const shouldSnapToEdge = Math.abs(startX) > halfChildWidth;
        console.log("shouldSnapToEdge", shouldSnapToEdge);
        let newPosition = position.x + childWidth;

        setPosition({
          x: shouldSnapToEdge ? -newPosition : 0,
          y: 0,
        });
        setDragging(false);

        componentRef.current.removeEventListener("mousemove", handleMouseMove);
        componentRef.current.removeEventListener("mouseup", handleMouseUp);
      };

      const handleMouseLeave = () => {
        const childWidth = childRef.current.offsetWidth;
        const halfChildWidth = childWidth / 2;

        const shouldSnapToEdge = Math.abs(position.x) > halfChildWidth;
        +setPosition({
          x: shouldSnapToEdge ? -childWidth : 0,
          y: 0,
        });
        setDragging(false);

        componentRef.current.removeEventListener("mousemove", handleMouseMove);
        componentRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      };

      setDragging(true);

      componentRef.current.addEventListener("mouseup", handleMouseUp);
      componentRef.current.addEventListener("mousemove", handleMouseMove);
      componentRef.current.addEventListener("mouseleave", handleMouseLeave);
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
    childRef: childRef,
    style: {
      cursor: dragging ? "grabbing" : "grab",

      transform: `translate3d(${position.x}px,0px,0px)`,
    },
  };
};

export default useTranslatexDraggable;
