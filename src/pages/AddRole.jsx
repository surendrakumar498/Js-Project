import React, { useState } from 'react';
import '../pages/AddRole.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

const AddRole = () => {
  const [isActive, setIsActive] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  return (
    <>
    <div className="container1">
      <h2>Add Role</h2>

      {/* Active/Inactive Checkbox */}
      <div className="active-inactive-container">
        <span>Active/Inactive</span>
        <span>{isActive ? "Active" : "Inactive"}</span>
        <input
          type="checkbox"
          checked={isActive}
          onChange={() => setIsActive(!isActive)}
        />
      </div>

      {/* Role Name Input */}
      
      <div>
        <label>
          Role Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          placeholder="Enter Role Name"
        />
      </div>
    </div>

    {/* Chrck box permission  */}

    <div className='container'>
        <ul className='ul_list'>
          <div className='pre_container'>
          <div>Permission</div>
          <div>Select All <input type="checkbox" value="read"/></div>
        </div>
        <div className='li_list'>
        <li>
          <div>
          <div className='add'> <input type="checkbox" value="read" />&nbsp; &nbsp;<span>Staff</span></div>
          <div className='permission_access'>
          <span><input type="checkbox" />&nbsp; &nbsp;Read</span>&nbsp; &nbsp;
          <span><input type="checkbox" />&nbsp; &nbsp;Write</span>&nbsp; &nbsp;
          <span><input type="checkbox" />&nbsp; &nbsp;Update</span>&nbsp; &nbsp;
          <span><input type="checkbox" />&nbsp; &nbsp;Delete</span>&nbsp; &nbsp;
          </div> 
          </div>
          </li>
          
        <li>
          <div>
          <div className='add'> <input type="checkbox" value="read" />&nbsp; &nbsp;<span>Coupon</span></div>
          <div className='permission_access'>
          <span><input type="checkbox" />&nbsp; &nbsp;Read</span>&nbsp; &nbsp;
          <span><input type="checkbox" />&nbsp; &nbsp;Write</span>&nbsp; &nbsp;
          <span><input type="checkbox" />&nbsp; &nbsp;Update</span>&nbsp; &nbsp;
          <span><input type="checkbox" />&nbsp; &nbsp;Delete</span>&nbsp; &nbsp;
          </div> 
          </div>
        </li>
        </div>
        </ul>
    </div>
</>
  )
};

export default AddRole