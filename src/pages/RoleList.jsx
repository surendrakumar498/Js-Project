import React, { useState } from 'react';
import '../pages/RoleList.css';

function RoleList() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { id: 1, name: 'Martin Poul', email: 'martin@mail.com', status: 'Active' },
    // Add more roles as needed
  ];

  const handleEdit = (role) => {
    setSelectedRole(role);
    setShowEditModal(true);
  };

  const handleDelete = (role) => {
    setSelectedRole(role);
    setShowDeleteModal(true);
  };

  const handleSaveEdit = () => {
    // Implement your save logic here
    console.log('Saving edits for:', selectedRole);
    setShowEditModal(false);
  };

  const handleConfirmDelete = () => {
    // Implement your delete logic here
    console.log('Deleting:', selectedRole);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="container">
        <div className="table-responsive">
          <h1>Role List</h1>
          <div className="table-wrapper">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Role Name</th>
                  <th>Updated By Staff</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role, index) => (
                  <tr key={role.id}>
                    <th className="serialNo">
                      <span scope="row">{index + 1}</span>
                    </th>
                    <td>{role.name}</td>
                    <td>{role.email}</td>
                    <td>
                      <button className='btn_active'>{role.status}</button>
                    </td>
                    <td>
                      <a href="#!" className="edit" onClick={() => handleEdit(role)}>
                        <i className="fa-solid fa-pen"></i>
                      </a>
                      <a href="#!" className="delete" onClick={() => handleDelete(role)}>
                        <i className="fa-solid fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
              <ul className="pagination">
                <li className="page-item disabled"><a href="#!">Previous</a></li>
                <li className="page-item"><a href="#!" className="page-link">1</a></li>
                <li className="page-item"><a href="#!" className="page-link">2</a></li>
                <li className="page-item active"><a href="#!" className="page-link">3</a></li>
                <li className="page-item"><a href="#!" className="page-link">4</a></li>
                <li className="page-item"><a href="#!" className="page-link">5</a></li>
                <li className="page-item"><a href="#!" className="page-link">Next</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div id="editEmployeeModal" className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Staff</h4>
                  <button type="button" className="close" onClick={() => setShowEditModal(false)}>&times;</button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" defaultValue={selectedRole?.name} required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" defaultValue={selectedRole?.email} required />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea className="form-control" required></textarea>
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" onClick={() => setShowEditModal(false)}>Cancel</button>
                  <button type="button" className="btn btn-info" onClick={handleSaveEdit}>Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div id="deleteEmployeeModal" className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Delete Staff</h4>
                  <button type="button" className="close" onClick={() => setShowDeleteModal(false)}>&times;</button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete these Records?</p>
                  <p className="text-warning"><small>This action cannot be undone.</small></p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                  <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RoleList;