import React, { useState } from "react";
import blush from "../../assets/images/blush.png";
import bronzer from "../../assets/images/bronzer.png";
import concealer from "../../assets/images/concealer.png";
import eyecolor from "../../assets/images/eyecolor.png";
import eyeliner from "../../assets/images/eyeliner.png";
import eyeshadows from "../../assets/images/eyeshadows.png";
import eyebrows from "../../assets/images/eyebrows.png";
import eyebrows3D from "../../assets/images/eyebrows3D.png";
import eyelash from "../../assets/images/eyelash.png";
import facecontour from "../../assets/images/facecontour.png";
import foundation from "../../assets/images/foundation.png";
import haircolor from "../../assets/images/haircolor.png";
import lipsticks from "../../assets/images/lipsticks.png";
import lipliner from "../../assets/images/lipliner.png";
import mascara from "../../assets/images/mascara.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./general.css";

const categories = [
  { name: "Blush", image: blush },
  { name: "Bronzer", image: bronzer },
  { name: "Concealer", image: concealer },
  { name: "Eye Color", image: eyecolor },
  { name: "Eye Liner", image: eyeliner },
  { name: "Eye Shadow", image: eyeshadows },
  { name: "Eyebrows", image: eyebrows },
  { name: "Eyebrows 3D", image: eyebrows3D },
  { name: "Eyelashes", image: eyelash },
  { name: "Face Contour", image: facecontour },
  { name: "Foundation", image: foundation },
  { name: "Hair Color", image: haircolor },
  { name: "Lip Color", image: lipsticks },
  { name: "Lip Liner", image: lipliner },
  { name: "Mascara", image: mascara },
];

const General = () => {
  const [selected, setSelected] = useState(categories[0]);
  const [productid, setProductId] = useState('')


  // Function to handle button clicks
  const handleClick = (message) => {
    console.log(message);
  };

  return (
    <>
      <header className="addProdut">
        <h1>Add Product</h1>
        <div className="row">
          <div className="col-lg-4 d-flex align-items-center justify-content-end w-100">
            <div className="cancel-btn">
              <button onClick={() => handleClick("Cancel clicked")}>Cancel</button>
            </div>
            <div className="cancel-btn">
              <button className="save" onClick={() => handleClick("Save Draft clicked")}>
                Save Draft
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <h3 className="general">General</h3>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>
                Product Category<span className="text-danger">*</span>
              </label>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={selected.image}
                    alt={selected.name}
                    style={{ width: "20px", height: "20px", marginRight: "10px" }}
                  />
                  {selected.name}
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="dropdown-item"
                      role="button"
                      onClick={() => {
                        setSelected(category);
                        handleClick(`${category.name} selected`);
                      }}
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        style={{ width: "20px", height: "20px", marginRight: "10px" }}
                      />
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <label>
                Product ID <span className="text-danger">*</span>
              </label>
              <input onChange={(e)=> setProductId(e.target.value)} type="text" />
            </div>
          </div>
        </div>

        {/* Add SKU Section start */}
        <div className="sku-container">
          <h4 className="sku-title">SKU Details</h4>
          <p className="sku-description">
            Define the SKU details such as the colors, patterns, textures, and SKU attributes.
          </p>
          <button className="add-sku-btn" onClick={() => handleClick("Add SKU clicked")}>
            + Add SKU
          </button>
          <div className="table-container">
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-evenly w-100">
                <h2>Basic Info</h2>
                <h2>AR Effect</h2>
              </div>
            </div>

            <table className="sku-table">
              <thead>
                <tr>
                  <th>SKU Name</th>
                  <th>Full SKU Name</th>
                  <th>Barcode</th>
                  <th>Action URL</th>
                  <th>Ver.</th>
                  <th>Color</th>
                  <th>Pattern & Color</th>
                  <th>Color Intensity</th>
                  <th>Color Intensity Bar</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="10" className="no-data">
                    No Data
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="button-group">
            <button className="cancel-btn" onClick={() => handleClick("Cancel clicked")}>
              Cancel
            </button>
            <button className="save-draft-btn" onClick={() => handleClick("Save Draft clicked")}>
              Save Draft
            </button>
            <button className="save-btn" onClick={() => handleClick("Save clicked")}>
              Save
            </button>
          </div>
        </div>
        {/* Add SKU Section end */}
      </div>
    </>
  );
};

export default General;
