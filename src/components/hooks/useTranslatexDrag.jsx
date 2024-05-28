"use client";
import React, { useState, useRef, useEffect } from "react";

const useTranslatexDraggable = (fixSnapWidth) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const componentRef = useRef(null);
  const childRef = useRef(null);
  const parentRef = useRef();

  useEffect(() => {
    const handleMouseDown = (e) => {
      const startX = e.pageX - position.x;
      var newX = e.pageX - startX;
      var rightX;
      var firstchildWidth = componentRef.current.firstChild.offsetWidth;
      console.log(
        componentRef.current.offsetWidth,
        parentRef.current.offsetWidth
      );

      if (!fixSnapWidth) {
        if (componentRef.current) {
          let childLength = 0;

          var childrenArray = [...componentRef.current.children];
          childrenArray.forEach((child) => {
            childLength += child.offsetWidth;
          });
          firstchildWidth * componentRef.current.children.length;
          var gap = componentRef.current.offsetWidth - childLength;
          gap = gap / componentRef.current.children.length;
          var childWidth = componentRef.current.firstChild.offsetWidth + gap;
          console.log(
            gap,
            componentRef.current.offsetWidth,
            parentRef.current.offsetWidth
          );
        }
        console.log("not fixsna");
      } else {
        console.log("using fixsna");

        var childWidth = fixSnapWidth;
      }
      function handleMouseMove(e) {
        e.preventDefault();
        newX = e.pageX - startX;
        rightX =
          componentRef.current.offsetWidth -
          (Math.abs(newX) + parentRef.current.offsetWidth);
        setPosition({ x: newX });
      }

      const handleMouseUp = () => {
        setPosition({
          x:
            newX > 0
              ? 0
              : rightX <= 0
              ? -(
                  componentRef.current.offsetWidth -
                  parentRef.current.offsetWidth
                )
              : position.x > newX
              ? -(childWidth * Math.abs(Math.floor(newX / childWidth)))
              : -(childWidth * Math.abs(Math.ceil(newX / childWidth))),
        });
        setDragging(false);

        componentRef.current.removeEventListener("mousemove", handleMouseMove);
        componentRef.current.removeEventListener("mouseup", handleMouseUp);
      };

      const handleMouseLeave = () => {
        setDragging(false);
        setPosition({
          x:
            newX > 100
              ? 0
              : rightX <= 0
              ? -(
                  componentRef.current.offsetWidth -
                  parentRef.current.offsetWidth
                )
              : position.x > newX
              ? -(childWidth * Math.abs(Math.floor(newX / childWidth)))
              : -(childWidth * Math.abs(Math.ceil(newX / childWidth))),
        });

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

    const handleTouchStart = (e) => {
      const startX = e.touches[0].pageX - position.x;
      var newX = e.touches[0].pageX - startX;
      var rightX;
      var firstchildWidth = componentRef.current.firstChild.offsetWidth;

      var childrenArray = [...componentRef.current.children];

      if (!fixSnapWidth) {
        if (componentRef.current) {
          let childLength = 0;
          childrenArray.forEach((child) => {
            childLength += Number(child.offsetWidth);
          });

          var gap = componentRef.current.offsetWidth - childLength;
          gap = gap / componentRef.current.children.length;
          var childWidth = componentRef.current.firstChild.offsetWidth + gap;
        }
      } else {
        var childWidth = fixSnapWidth;
      }

      function handleTouchMove(e) {
        e.preventDefault();
        newX = e.touches[0].pageX - startX;
        rightX =
          componentRef.current.offsetWidth -
          (Math.abs(newX) + parentRef.current.offsetWidth);
        setPosition({ x: newX });
      }

      const handleTouchEnd = () => {
        // childrenArray.shift();
        // componentRef.current.children = childrenArray;
        setPosition({
          x:
            newX > 0
              ? 0
              : rightX <= 0
              ? -(
                  componentRef.current.offsetWidth -
                  parentRef.current.offsetWidth
                )
              : position.x > newX
              ? -(childWidth * Math.abs(Math.floor(newX / childWidth)))
              : -(childWidth * Math.abs(Math.ceil(newX / childWidth))),
        });
        setDragging(false);

        componentRef.current.removeEventListener("touchmove", handleTouchMove);
        componentRef.current.removeEventListener("touchend", handleTouchEnd);
      };

      setDragging(true);

      componentRef.current.addEventListener("touchmove", handleTouchMove);
      componentRef.current.addEventListener("touchend", handleTouchEnd);
    };

    if (componentRef.current) {
      componentRef.current.addEventListener("mousedown", handleMouseDown);
      componentRef.current.addEventListener("touchstart", handleTouchStart);
    }

    return () => {
      if (componentRef.current) {
        componentRef.current.removeEventListener("mousedown", handleMouseDown);
        componentRef.current.removeEventListener(
          "touchstart",
          handleTouchStart
        );
      }
    };
  }, [position]);

  return {
    ref: componentRef,
    childRef: childRef,
    parentRef,
    style: {
      transitionDuration: dragging ? "0s" : "0.5s",
      cursor: dragging ? "grabbing" : "grab",
      transform: `translate3d(${position.x}px,0px,0px)`,
    },
  };
};

export default useTranslatexDraggable;
