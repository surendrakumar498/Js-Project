import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products", {
        headers: {
          Accept: "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((response) => {
        console.log("API Response:", response.data.data);

        if (Array.isArray(response.data.data)) {
          const sortedProducts = response.data.data.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
          setProducts(sortedProducts);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="product-list-container">
      <div className="header">
        <h2>Products List</h2>
        <div className="button-group">
          <button className="import-button">Import</button>
          <button className="export-button">Export</button>
          <button className="add-product" onClick={() => navigate("/brandproduct")}>
            Add Product
          </button>
        </div>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th></th>
            <th>Title</th>
            <th>Sku</th>
            <th>Status</th>
            <th>Inventory</th>
            <th>Category</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={index}>
              <td>{indexOfFirstProduct + index + 1}</td>
              <td>
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0].url} alt={product.title} className="product-image" />
                ) : (
                  "No Image"
                )}
              </td>
              <td>{products.title}</td>
              <td>{product.sku}</td>
              <td>
                <span className={`status ${product.status.toLowerCase()}`}>{product.status}</span>
              </td>
              <td className={product.quantity === 0 ? "out-of-stock" : "in-stock"}>
                {products.quantity} in stock
              </td>
              <td>{products.category}</td>
              <td>{products.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => setCurrentPage(page + 1)}
              className={currentPage === page + 1 ? "active" : ""}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
