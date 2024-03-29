import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function index({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      endAt: 100, // Set the maximum x value to 100 (adjust as needed)
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX } = e;
      const { width, left } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 4);
      if (x > 0) {
        // Only update xTo if x is positive (to the right)
        xTo(x * 0.35);
      }
    });

    magnetic.current.addEventListener("mouseleave", () => {
      xTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
