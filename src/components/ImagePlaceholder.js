import React from "react";
import "./ImagePlaceholder.css";

export default function ImagePlaceholder() {
  return (
    <div className="image-container">
      <div className="image-item image-1">
        <img src="/images/my-image.jpg" alt="Image 1" />
      </div>
      <div className="image-item image-2">
        <img src="/images/my-image.jpg" alt="Image 2" />
      </div>
      <div className="image-item image-3">
        <img src="/images/my-image.jpg" alt="Image 3" />
      </div>
    </div>
  );
}
