import React from "react";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="blog-text m-5">
        <h1 className="text-center text-info">Our Gallery</h1>
      </div>
      <div className="blogs-section gal">
        <div class="blog-card">
          <img
            src="https://i.ibb.co/NVpvmJF/onmyway.jpg"
            class="blog-image"
            alt=""
          />
        </div>
        <div class="blog-card">
          <img
            src="https://i.ibb.co/GV8vdfb/poor.jpg"
            class="blog-image"
            alt=""
          />
        </div>
        <div class="blog-card">
          <img
            src="https://i.ibb.co/4pPDLPF/food.jpg"
            class="blog-image"
            alt=""
          />
        </div>
        <div class="blog-card">
          <img
            src="https://i.ibb.co/kHC3k1V/standard.jpg"
            class="blog-image"
            alt=""
          />
        </div>
        <div class="blog-card">
          <img
            src="https://i.ibb.co/cTRKFdK/wanderland.jpg"
            class="blog-image"
            alt=""
          />
        </div>
        <div class="blog-card">
          <img
            src="https://i.ibb.co/BBLpgR0/adams.jpg"
            class="blog-image"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
