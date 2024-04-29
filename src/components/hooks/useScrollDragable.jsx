"use client";
import { useRef, useEffect } from "react";

const useDraggable = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startDragX = useRef(0);
  const startScrollLeft = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseDown = (event) => {
      isDragging.current = true;
      startDragX.current = event.clientX;
      startScrollLeft.current = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const handleMouseMove = (event) => {
      if (!isDragging.current) return;
      const deltaX = event.clientX - startDragX.current;
      container.scrollLeft = startScrollLeft.current - deltaX;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      container.style.cursor = "grab";
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return containerRef;
};

export default useDraggable;
