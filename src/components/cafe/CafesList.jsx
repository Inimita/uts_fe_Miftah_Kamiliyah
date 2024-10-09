import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './CafeList.css'; // Menghubungkan file CSS

const CafeList = () => {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    getCafes();
  }, []);

  // Fungsi untuk mengambil daftar cafe dari API
  const getCafes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/cafe");
      setCafes(response.data);
    } catch (error) {
      console.error("Error fetching cafes:", error);
    }
  };

  // Fungsi untuk menghapus cafe berdasarkan ID
  const deleteCafe = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/cafe          /delete/${id}`);
      getCafes();
    } catch (error) {
      console.error("Error deleting cafe:", error);
    }
  };

  return (
    <div className="container-cafe">
      <div className="header">
        <div className="header-cafe">
          <h1>Cafe List</h1>
          <Link to="/cafe/add" className="add-btn">Add New</Link>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="cafe-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Cafe</th>
              <th>Alamat</th>
              <th>Tables</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cafes.map((cafe, index) => (
              <tr key={cafe.id}>
                <td>{index + 1}</td>
                <td>{cafe.nama}</td>
                <td>{cafe.alamat}</td>
                <td>{cafe.tables}</td>
                <td>
                  <button className="edit-btn">
                    <Link to={`/cafe/edit/${cafe.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteCafe(cafe.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CafeList;
