import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddStaff.css";
import axios from 'axios'

import React from 'react'

const AddStaff = () => {
      const [showPassword, setShowPassword] = useState(false);
      const [passwordType, setPasswordType] = useState("Manual");
    
      const getCustomersData = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos/1")
          .then((data) => console.log(data.data))
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        getCustomersData();
      }, []);
    
      getCustomersData();
    
      console.log("passwordType", passwordType);
    
      return (
    
        <div className="container">
          <div className="d-flex flex-column flex-md-row gap-3 align-items-start border p-3 rounded">
            {/* Staff Form */}
            <div
              className="p-4 shadow-sm w-100"
              style={{ maxWidth: "500px", borderRadius: "8px" }}
            >
              <h4 className="mb-3">Add Staff</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    required
                  />
                </div>
    
                <div className="mb-3">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    required
                  />
                </div>
    
                <div className="mb-3">
                  <label className="form-label">
                    Show Password Type <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    value={passwordType}
                    onChange={(e) => setPasswordType(e.target.value)}
                  >
                    <option value="Manual">Manual</option>
                    <option value="Auto Generate">Auto Generate</option>
                  </select>
                </div>
    
                {passwordType === "Manual" && (
                  <div className="mb-3 position-relative">
                    <label className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex align-items-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Enter Password"
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-light ms-2 border"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "🙈" : "👁️"}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
    
    
    
            {/* Role Settings */}
            <div
              className="p-4 shadow-sm w-100"
              style={{ maxWidth: "400px", borderRadius: "8px" }}
            >
              <form>
                <div className="mb-3">
                  <label className="form-label">Select Role</label>
                  <select className="form-select">
                    <option>Select Role</option>
                    <option>Super Admin</option>
                    <option>v-permission</option>
                    <option>your-role</option>
                    <option>new-roles</option>
                  </select>
                </div>
    
                <div className="mb-3">
                  <label className="form-label">
                    Status<span className="text-danger">*</span>
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="active"
                      name="status"
                    />
                    <label className="form-check-label" htmlFor="active">
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inactive"
                      name="status"
                    />
                    <label className="form-check-label" htmlFor="inactive">
                      Inactive
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }

export default AddStaff
