import React, { useEffect, useState } from "react";
import "../styles/FrontGallery.css";

export default function FrontGallery() {
  const images = [
    "/images/front1.jpg",
    "/images/front2.jpg",
    "/images/front3.jpg",
    
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="front-gallery">
      <img src={images[current]} alt="Hijab Collection" className="slide" />
      <div className="gallery-text">
        <h1>Modern & Elegant Hijabs</h1>
        <p>Express your beauty with style 🌸</p>
      </div>
    </section>
  );
}
