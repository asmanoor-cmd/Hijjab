import React from "react";
import "../styles/CollectionSection.css";

export default function CollectionSection({ addToCart }) {
  const sections = [
    {
      id: "new",
      title: "New Arrivals",
      images: [
        { src: "/images/new1.jpg", name: "Pack of Hijjab", price: "Rs.4000" },
        { src: "/images/new2.jpg", name: "Soft Touch Hijab", price: "Rs.1100" },
        { src: "/images/new3.jpg", name: "Everyday Wear", price: "Rs.1000" },
        { src: "/images/new4.jpg", name: "Luxury Georget", price: "Rs.1500" },
        { src: "/images/new5.jpg", name: "Plain Hijab", price: "Rs.950" },
        { src: "/images/new6.jpg", name: "Classic Style", price: "Rs.1300" },
      ],
    },
    {
      id: "summer",
      title: "Summer Collection",
      images: [
        { src: "/images/summer1.jpg", name: "Light Summer Hijab", price: "Rs.900" },
        { src: "/images/summer2.jpg", name: "Chic Cotton", price: "Rs.850" },
        { src: "/images/summer3.jpg", name: "Breezy Look", price: "Rs.1000" },
        { src: "/images/summer4.jpg", name: "Elegant Shade", price: "Rs.950" },
        { src: "/images/summer5.jpg", name: "Floral Touch", price: "Rs.1200" },
        { src: "/images/summer6.jpg", name: "Graceful Drape", price: "Rs.1100" },
      ],
    },
    {
      id: "winter",
      title: "Winter Collection",
      images: [
        { src: "/images/winter1.jpg", name: "Warm Hijab", price: "Rs.1300" },
        { src: "/images/winter2.jpg", name: "Soft Wool", price: "Rs.1400" },
        { src: "/images/winter3.jpg", name: "Velvet Hijab", price: "Rs.1500" },
        { src: "/images/winter4.jpg", name: "Classic Winter", price: "Rs.1600" },
        { src: "/images/winter5.jpg", name: "Cozy Style", price: "Rs.1250" },
        { src: "/images/winter6.jpg", name: "Stylish Wrap", price: "Rs.1450" },
      ],
    },
    {
      id: "chiffon",
      title: "Chiffon Collection",
      images: [
        { src: "/images/chiffon1.jpg", name: "Luxury Chiffon", price: "Rs.1300" },
        { src: "/images/chiffon2.jpg", name: "Classic Chiffon", price: "Rs.1250" },
        { src: "/images/chiffon3.jpg", name: "Soft Touch", price: "Rs.1100" },
        { src: "/images/chiffon4.jpg", name: "Plain Flow", price: "Rs.950" },
        { src: "/images/chiffon5.jpg", name: "Delicate Weave", price: "Rs.1400" },
        { src: "/images/chiffon6.jpg", name: "Elegant Drape", price: "Rs.1200" },
      ],
    },
    {
      id: "georgette",
      title: "Georgette Collection",
      images: [
        { src: "/images/georgette1.jpg", name: "Premium Georgette", price: "Rs.1500" },
        { src: "/images/georgette2.jpg", name: "Soft Flow", price: "Rs.1350" },
        { src: "/images/georgette3.jpg", name: "Elegant Texture", price: "Rs.1400" },
        { src: "/images/georgette4.jpg", name: "Luxury Wrap", price: "Rs.1600" },
        { src: "/images/georgette5.jpg", name: "Graceful Shade", price: "Rs.1550" },
        { src: "/images/georgette6.jpg", name: "Everyday Comfort", price: "Rs.1300" },
      ],
    },
  ];

  return (
    <div className="collection-wrapper">
      {sections.map((section) => (
        <section id={section.id} key={section.id} className="collection">
          <h2>{section.title}</h2>
          <div className="image-grid">
            {section.images.map((img, index) => (
              <div className="card" key={index}>
                <img src={img.src} alt={img.name} />
                <h4>{img.name}</h4>
                <p>{img.price}</p>
                <div className="btn-group">
                  <button onClick={() => addToCart(img)}>Add to Cart</button>
                  <button>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
