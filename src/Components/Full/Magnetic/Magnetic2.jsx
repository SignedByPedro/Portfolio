import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function index({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    // Create quickTo instances for x and y
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      endAt: -100, // Negative value for moving left
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      endAt: -100, // Negative value for moving up
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      // Calculate distance from the center of the element
      const distance = Math.sqrt(x * x + y * y);

      if (distance < 100) {
        // Adjust threshold as needed
        // Move the element at a 45-degree angle
        xTo(-distance * 0.5);
        yTo(-distance * 0.5);
      }
    });

    magnetic.current.addEventListener("mouseleave", () => {
      // Reset position
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
