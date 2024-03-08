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
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      endAt: 100, // Set the maximum y value to 100 (adjust as needed)
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 4);
      const y = clientY - (top + height / 4);

      // Update xTo and yTo
      xTo(x * 0.35);
      yTo(y * 0.35);
    });

    magnetic.current.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
