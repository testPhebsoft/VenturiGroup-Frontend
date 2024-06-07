"use client";
import { useEffect, useRef, useState } from "react";

function useClickToTouch() {
  const [touch, setTouch] = useState(null);
  const ref = useRef();
  useEffect(() => {
    const handleMouseDown = (e) => {
      e.preventDefault();
      const type = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend",
      }[e.type];

      const touch = new Touch({
        identifier: e.button,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        target: ref.current,
        touchType: "direct",
      });

      const te = new TouchEvent(type, {
        bubbles: true,
        cancelable: true,
        touches: [touch],
        changedTouches: [touch],
        targetTouches: [touch],
      });

      e.target.dispatchEvent(te);
    };

    const handleMouseMove = (e) => {
      e.preventDefault();
      const type = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend",
      }[e.type];

      const touch = new Touch({
        identifier: e.button,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        target: ref,
        touchType: "direct",
      });

      const te = new TouchEvent(type, {
        bubbles: true,
        cancelable: true,
        touches: [touch],
        changedTouches: [touch],
        targetTouches: [touch],
      });
      // console.log(te);
      e.target.dispatchEvent(te);
    };

    const handleMouseUp = (e) => {
      e.preventDefault();
      const type = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend",
      }[e.type];

      const touch = new Touch({
        identifier: e.button,
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        target: ref,
        touchType: "direct",
      });

      const te = new TouchEvent(type, {
        bubbles: true,
        cancelable: true,
        touches: [touch],
        changedTouches: [touch],
        targetTouches: [touch],
      });

      e.target.dispatchEvent(te);
    };

    document.addEventListener("mousedown", handleMouseDown, true);
    document.addEventListener("mousemove", handleMouseMove, true);
    document.addEventListener("mouseup", handleMouseUp, true);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown, true);
      document.removeEventListener("mousemove", handleMouseMove, true);
      document.removeEventListener("mouseup", handleMouseUp, true);
    };
  }, []);

  return ref;
}

export default useClickToTouch;
