import React, { useState, useRef } from "react";
import "../pages/detailsPage.css";
import HomePage from "./HomePage";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Lipstick from "../assets/images/lipstick.avif"; 
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.webp";
import img5 from "../assets/images/img5.webp";
import img6 from "../assets/images/img6.webp";
import img7 from "../assets/images/img7.webp";

const DetailsPage = () => {
  const [selectedShade, setSelectedShade] = useState("02 Scarlet Whisper");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [mainImage, setMainImage] = useState(Lipstick);
  const [startIndex, setStartIndex] = useState(0);
  const videoRef = useRef(null);

  const imageGallery = [Lipstick, img1, img2, img3, img4, img5, img6, img7];

  const shades = [
    { id: 1, name: "01 Ruby Red", color: "#E63946" },
    { id: 2, name: "02 Scarlet Whisper", color: "#D7263D" },
    { id: 3, name: "03 Burgundy Bliss", color: "#7B2D26" },
    { id: 4, name: "04 Berry Crush", color: "#A53860" },
    { id: 5, name: "05 Cherry Pop", color: "#FF3B3F" },
  ];

  const visibleThumbnails = 4; 

  const scrollUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const scrollDown = () => {
    if (startIndex < imageGallery.length - visibleThumbnails) {
      setStartIndex(startIndex + 1);
    }
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraOpen(true);
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      let tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraOpen(false);
  };

  return (
    <>
    <div>
     <HomePage />
    </div>
   
    <div className="product-container">
       
      {/* Left Image Slider */}
      <div className="image-slider">
        <button className="arrow-btn" onClick={scrollUp} disabled={startIndex === 0}>
          <FaChevronUp />
        </button>
        <div className="thumbnails-container">
          {imageGallery.slice(startIndex, startIndex + visibleThumbnails).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <button
          className="arrow-btn"
          onClick={scrollDown}
          disabled={startIndex >= imageGallery.length - visibleThumbnails}
        >
          <FaChevronDown />
        </button>
      </div>

      {/* Main Product Image */}
      <div className="image-section">
        <img src={mainImage} alt="Lipstick" className="product-image" />
      </div>

      {/* Product Details */}
      <div className="details-section">
        <h2>Love Tri-Angle 3 In 1 Lipstick - {selectedShade}</h2>
        <p className="features">Matte Finish | Waterproof | Easy To Use</p>

        {/* Try-On Feature */}
        <div className="try-on">
          <button className="try-on-btn" onClick={openCamera}>
            💄 Try On
          </button>
          {isCameraOpen && (
            <button className="close-btn" onClick={closeCamera}>
              ❌ Close Camera
            </button>
          )}
        </div>

        {isCameraOpen && (
          <div className="camera-preview">
            <video ref={videoRef} autoPlay playsInline></video>
          </div>
        )}

        <div className="rating">
          <span>⭐⭐⭐☆☆ 233 reviews</span>
        </div>

        <h3 className="price">MRP: ₹449</h3>
        <p className="net-content">NET CONTENT: 3.8 g (Inclusive of all taxes)</p>

        {/* Shades Selection */}
        <h4>Selected Shade: {selectedShade}</h4>
        <div className="shades">
          {shades.map((shade) => (
            <div
              key={shade.id}
              className={`shade-box ${selectedShade === shade.name ? "selected" : ""}`}
              style={{ backgroundColor: shade.color }}
              onClick={() => setSelectedShade(shade.name)}
            ></div>
          ))}
        </div>
      </div>

      {/* Additional Product Details */}
      <div className="product-details">
        <h3>Product Description</h3>
        <p>
          Why settle for one when you can engage in a ‘love triangle’? Introducing **Staze 9to9 Love Tri-Angle 3-In-1 Lipstick**, a never seen before lippie with 3 game-changing shades in 1. It has a highly pigmented formula that delivers a super comfortable matte finish for 12 hours long. Enriched with Avocado Oil, its lightweight texture hydrates and nourishes your pout. Our C-Lock Technology™ locks the color, making it look fresh with no transfers at all. One Lipstick, Three Possibilities! You can effortlessly switch your look from morning meetings to cocktail dinners in a single swipe.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>3-in-1 lipstick with multiple shades</li>
          <li>Highly pigmented formula</li>
          <li>12-hour long-lasting matte finish</li>
          <li>Enriched with Avocado Oil for hydration</li>
          <li>C-Lock Technology™ for no transfers</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default DetailsPage;