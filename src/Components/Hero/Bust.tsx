import React, { useEffect, useRef } from "react";
import "./BG.scss";

const Bust = () => {
  return (
    <>
      <div
        className="image-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <img src="../src/assets/Images/marble.png" alt="Bust" width={"300px"} />
      </div>
    </>
  );
};

export default Bust;
