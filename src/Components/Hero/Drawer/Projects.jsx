import React from "react";
import "./Projects.css";

export default function index({ index, title, href, isLast }) {
  return (
    <a href={href}>
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className={`projectDrawer ${isLast ? "lastDrawerProject" : ""}`}
      >
        <h2>{title}</h2>
      </div>
    </a>
  );
}
