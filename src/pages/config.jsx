import React, { useState } from "react";
import axios from "axios"; 

const Config = () => {
  const [product, setProduct] = useState({
    title: "apple",
    description: "apple",
    brand: "apple",
    pricing: {
      price: 1000,
      compare_at_price: 1200
    },
    category: "Electronics",
    product_id: 1,
    images: [],
    quantity: 1,
    sku: "TV-LED-55-BLK",
    status: "active"
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://4fd0-103-206-131-194.ngrok-free.app/stageBeautybrand/addProduct",
        product,
        { 
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
      console.log("Product added:", response.data);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div>
      <h2>Config Component</h2>
      <button onClick={handleSubmit}>Save Product</button>
    </div>
  );
};

export default Config;
