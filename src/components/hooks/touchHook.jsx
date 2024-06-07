"use client";
import { useState, useEffect } from "react";

function useTouchHandler() {
  const [touchTarget, setTouchTarget] = useState(null);

  const handleTouchStart = (event) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    setTouchTarget(event.target);
  };

  const handleClick = (e) => {
    const touch = new Touch({
      identifier: Date.now(),
      target: e.target,
      clientX: e.clientX,
      clientY: e.clientY,
    });
    e.target.style.touchTarget = "none";
    e.target.dispatchEvent(
      new TouchEvent("touchstart", {
        touches: [touch],
        targetTouches: [touch],
        changedTouches: [touch],
      })
    );
    // console.log(touch);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
  }, []);
}

export default useTouchHandler;
