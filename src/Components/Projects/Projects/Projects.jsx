import React from "react";
import "./Projects.css";

export default function index({ index, title, href, setModal, isLast }) {
  return (
    <a href={href} target="_blank">
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className={`project ${isLast ? "lastProject" : ""}`}
      >
        <h2>{title}</h2>
        <p>Design & Development</p>
      </div>
    </a>
  );
}
