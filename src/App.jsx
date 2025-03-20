import React from "react";
import RoleList from "./pages/RoleList";
import AddRole from "./pages/AddRole";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import BrandProducts from '../src/pages/BrandProducts'
import AddStaff from "./pages/AddStaff";
import General from "./pages/General/General";
import Config from "./pages/config";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      {/* <RoleList />
      <AddRoll /> */}
      <Router>
        <Routes>
        <Route path="/" element={<RoleList />} />
        <Route path="/addrole" element={<AddRole />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/brandproduct" element={<BrandProducts />} />
        <Route path="/general" element={<General />} />
        <Route path="/addstaff" element={<AddStaff />} />
        <Route path="/config" element={<Config />} />
        <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
