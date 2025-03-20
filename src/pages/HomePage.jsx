import React from "react";
import arrows from "../assets/images/arrow.png";
import blush from "../assets/images/blush1.webp";
import bronzer from "../assets/images/Bronzer1.webp";
import EyeBrow from "../assets/images/Eyebrow.jpg";
import EyeLiner from "../assets/images/Eyeliner.jpg";
import Eyeshadow from "../assets/images/EyeShadow.jpg";
import "../pages/home.css";

const HomePage = () => {
  const handleProductClick = (productName) => {
    alert(`You clicked on ${productName}!`);
  };
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-container">
          <div className="header-logo">
             <h1>StazeBeauty</h1>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search here ..." />
            <button>Search</button>
          </div>
          <div className="flex items-center space-x-2">
            <a
              className="flex items-center  text-blue-600 hover:underline"
              title="Login"
              href="/account/login?ret=/"
            >
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                alt="Login"
                className="w-6 h-6"
              />
              <span className="arrows">
                Login <img src={arrows} alt="Logo" />
              </span>
              <form action=""></form>
            </a>
          </div>
          <div className="nav-links">
            <a href="#">Categories</a>
            <a href="#">All Products</a>
            <a href="#">Contact</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </nav>

      {/* Categories */}

      {/* <div className="categories">
            <div className="categories-container">
              <a href="#">Powder</a>
              <a href="#">Cream</a>
              <a href="#">Pencil</a>
              <a href="#">Gel</a>
              <a href="#">Liquid</a>
              <a href="#">Palette</a>
              <a href="#">Mineral</a>
              <a href="#">Highlighter</a>
              <a href="#">Lipstick</a>
              <a href="#">Lip Gloss</a>
              <a href="#">Contour</a>
              <a href="#">Concealer</a>
            </div>
          </div> */}
      {/* Product Categories */}

      <div>
        <div className="products">
          <div className="product" onClick={() => handleProductClick("Blush")}>
            <img src={blush} alt="Blush" />
            <p>Blush</p>
          </div>
          <div
            className="product"
            onClick={() => handleProductClick("Bronzer")}
          >
            <img src={bronzer} alt="Bronzer" />
            <p>Bronzer</p>
          </div>
          <div
            className="product"
            onClick={() => handleProductClick("Eyebrow")}
          >
            <img src={EyeBrow} alt="Eyebrow" />
            <p>Eyebrow</p>
          </div>
          <div
            className="product"
            onClick={() => handleProductClick("Eyeliner")}
          >
            <img src={EyeLiner} alt="Eyeliner" />
            <p>Eyeliner</p>
          </div>
          <div
            className="product"
            onClick={() => handleProductClick("Eye Shadow")}
          >
            <img src={Eyeshadow} alt="Eye Shadow" />
            <p>Eye Shadow</p>
          </div>
        </div>
        {/* Banner Section */}
        <div className="banner">
          <h2>STAZE BEAUTY Love SALE</h2>
          <button>Shop Your Heart Out</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
