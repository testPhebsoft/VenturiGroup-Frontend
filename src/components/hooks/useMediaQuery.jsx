// File: use-media-query.js
import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    // Initial check
    updateMatches();

    // Add listener for future changes
    const listener = () => {
      updateMatches();
    };

    mediaQueryList.addEventListener("change", listener);

    // Cleanup on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};
