import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./BrandProduct.css";

const AddProducts = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
    compare_at_price: "",
    category: "",
    images: [],
    quantity: "",
    sku: "",
    status: "Active",
    colors: "",
    tags: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (e, parent) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [parent]: { ...prev[parent], [name]: value },
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct((prev) => ({
      ...prev,
      images: files,
    }));
  };
  // define the clear form
  const fileInputRef = useRef(null);
  const clearForm = () => {
    setProduct({
      title: "",
      description: "",
      brand: "",
      price: "",
      compare_at_price: "",
      category: "",
      images: "",
      quantity: "",
      sku: "",
      status: "Active",
      colors: "",
      tags: "",
    });

    // Clear form data
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("title", product.title);
      formData.append("description", product.description);
      formData.append("brand", product.brand);
      formData.append("category", product.category);
      formData.append("price", product.price);
      formData.append("compare_at_price", product.compare_at_price);
      formData.append("quantity", product.quantity);
      formData.append("sku", product.sku);
      formData.append("status", product.status);
      formData.append("colors", product.colors);
      formData.append("tags", product.tags);

      product.images.forEach((file) => {
        formData.append("images", file);
      });

      const response = await axios.post(
        "https://fc76-103-206-131-194.ngrok-free.app/brand/addProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Product saved:", response.data);
      alert("Product saved successfully!");

      clearForm();
    } catch (error) {
      console.error(
        "Error saving product:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to save product");
    }
  };

  return (
    <div className="container">
      <h1 className="header">Brand Product</h1>
      <div className="row">
        <div className="col-lg-6 sm-2">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={product.title}
              placeholder="Add Product"
              className="input-box"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              className="input-box textarea"
              name="description"
              value={product.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <label>Media</label>
          <div className="form-group-media">
            <div className="media-box">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="mediaInput"
              />
              <p className="info-text">Accepts images, videos, or 3D models</p>
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="input-box"
            >
              <option value="">Select Category</option>
              <option value="Cloths">Cloths</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Kotton">Kotton</option>
            </select>
          </div>

          <div className="pricing-section">
            <h3>Pricing</h3>
            <div className="pricing-inputs">
              <div className="form-group">
                <label>Price</label>
                <div className="price-box">
                  <span className="currency">₹</span>
                  <input
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="price-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Compare-at Price</label>
                <div className="price-box">
                  <span className="currency">₹</span>
                  <input
                    type="text"
                    name="compare_at_price"
                    value={product.compare_at_price}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="price-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={product.status}
              onChange={handleChange}
              className="input-box"
            >
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tag</label>
            <input
              type="text"
              name="tags"
              value={product.tags}
              onChange={handleChange}
              placeholder="Tag"
              className="input-box"
            />
          </div>
          <div className="form-group">
            <label>SKU</label>
            <input
              type="text"
              name="sku"
              value={product.sku}
              onChange={handleChange}
              placeholder="Add SKU"
              className="input-box"
            />
          </div>
          <div className="form-group">
            <label>Brand Name</label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              placeholder="Brand Name"
              className="input-box"
            />
          </div>
          <div className="form-group">
            <label>Select color</label>
            <input
              type="color"
              name="colors"
              value={product.colors}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className="submit-btn">
        Save Product
      </button>
    </div>
  );
};

export default AddProducts;
