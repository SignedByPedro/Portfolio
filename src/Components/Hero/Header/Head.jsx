import React, { forwardRef } from "react";
import "./Head.scss";
import Magnetic from "../../Full/Magnetic/Magnetic4";

const Head = forwardRef(function index(props, ref) {
  return (
    <>
      <div className="Head">
        <Magnetic>
          <div className="burger">
            <div ref={ref} className="bounds"></div>
          </div>
        </Magnetic>
        <a href="./" className="logoSVG">
          <svg
            id="P11"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 216.48 216.72"
          >
            <path
              class="cls-1"
              d="M216.48,81.75h-54.4v-27.05h-27.26V0h81.66v81.75Z"
              fill="lightgrey"
              strokeWidth="0"
            />
            <path
              class="cls-1"
              d="M0,216.72v-81.43h54.85v26.71h26.66v54.72H0Z"
              fill="lightgrey"
              strokeWidth="0"
            />
            <path
              class="cls-1"
              d="M81.42,54.69h-26.49v26.98H.07V.06h81.35v54.63Z"
              fill="lightgrey"
              strokeWidth="0"
            />
            <path
              class="cls-1"
              d="M95.09,149.3h-20.96v-81.6h20.96v81.6Z"
              fill="lightgrey"
              strokeWidth="0"
            />
            <path
              class="cls-1"
              d="M121.36,149.27v-81.6h20.95v81.6h-20.95Z"
              fill="lightgrey"
              strokeWidth="0"
            />
          </svg>
        </a>
      </div>
    </>
  );
});

export default Head;
