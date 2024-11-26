import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dash.css';

function Dash() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const [tableData, setTableData] = useState([
    { id: 1, drug: 'Paracetamol', brand: 'Panadol', manufacturer: 'GSK', license: '12345', company: 'GSK Pharma' },
    { id: 2, drug: 'Ibuprofen', brand: 'Advil', manufacturer: 'Pfizer', license: '67890', company: 'Pfizer Ltd' },
    { id: 3, drug: 'Aspirin', brand: 'Disprin', manufacturer: 'Bayer', license: '11223', company: 'Bayer Pharma' },
  ]);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(true); // Show the logout confirmation modal
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate('/'); // Navigate back to login after confirming logout
  };

  const cancelLogout = () => {
    setShowLogoutModal(false); // Close the modal if canceled
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = tableData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-actions">
        <button className="action-button" onClick={() => navigate('/admins')}>Admins</button>
          <button className="action-button">Generate Test QR</button>
        </div>
        <div className="logout-container">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>

      {/* Filter */}
      <div className="dashboard-filter">
        <div className="input-wrapper">
          <input
            type="text"
            id="filter-input"
            placeholder=" "
            value={filter}
            onChange={handleFilterChange}
          />
          <label htmlFor="filter-input">Filter table...</label>
        </div>
      </div>

      {/* Table */}
      <div className="dashboard-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Drug</th>
              <th>Brand</th>
              <th>Manufacturer</th>
              <th>License No.</th>
              <th>Company Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.drug}</td>
                <td>{row.brand}</td>
                <td>{row.manufacturer}</td>
                <td>{row.license}</td>
                <td>{row.company}</td>
                <td>
                  <button className="action-button">Batch Management</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="logout-modal">
          <div className="modal-content">
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button onClick={confirmLogout} className="modal-button">Yes</button>
              <button onClick={cancelLogout} className="modal-button">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dash;
