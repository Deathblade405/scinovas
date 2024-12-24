import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dash.css';

function Dash() {
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [rowsPerPage] = useState(5); // Define rows per page
  const [tableData, setTableData] = useState([
    { id: 1, drug: 'Paracetamol', brand: 'Panadol', manufacturer: 'GSK', license: '12345', company: 'GSK Pharma' },
    { id: 2, drug: 'Ibuprofen', brand: 'Advil', manufacturer: 'Pfizer', license: '67890', company: 'Pfizer Ltd' },
    { id: 3, drug: 'Aspirin', brand: 'Disprin', manufacturer: 'Bayer', license: '11223', company: 'Bayer Pharma' },
    { id: 4, drug: 'Paracetamol', brand: 'Panadol', manufacturer: 'GSK', license: '12345', company: 'GSK Pharma' },
    { id: 5, drug: 'Ibuprofen', brand: 'Advil', manufacturer: 'Pfizer', license: '67890', company: 'Pfizer Ltd' },
    { id: 6, drug: 'Aspirin', brand: 'Disprin', manufacturer: 'Bayer', license: '11223', company: 'Bayer Pharma' },
    { id: 7, drug: 'Paracetamol', brand: 'Panadol', manufacturer: 'GSK', license: '12345', company: 'GSK Pharma' },
    { id: 8, drug: 'Ibuprofen', brand: 'Advil', manufacturer: 'Pfizer', license: '67890', company: 'Pfizer Ltd' },
    { id: 9, drug: 'Aspirin', brand: 'Disprin', manufacturer: 'Bayer', license: '11223', company: 'Bayer Pharma' },
    { id: 10, drug: 'Paracetamol', brand: 'Panadol', manufacturer: 'GSK', license: '12345', company: 'GSK Pharma' },
  ]);

  // Get isSuperAdmin value from location (passed via navigation)
  const isSuperAdmin = location.state?.isSuperAdmin || false;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = tableData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  // Get the current slice of table data for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-actions">
          {/* Show Admins button only if isSuperAdmin is true */}
          {isSuperAdmin && (
            <button
              className="action-button"
              onClick={() => navigate('/admins', { state: { isSuperAdmin } })}
            >
              Admins
            </button>
          )}
          <button className="action-button">Generate Test QR</button>
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
            {currentRows.map((row) => (
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

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredData.length / rowsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Dash;
