import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './CafeAdd.css'; // Menghubungkan file CSS

const CafeAdd = () => {
  const [namaCafe, setNamaCafe] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tables, setTables] = useState(0); // Awalnya di set ke angka
  const navigate = useNavigate();

  const saveCafe = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/cafe/post", {
        nama: namaCafe,
        alamat: alamat,
        tables: tables,
      });
      alert("Cafe berhasil ditambahkan");
      navigate("/cafe");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">    
      <div className="form-wrapper">
        <form onSubmit={saveCafe} className="form">
          <div className="form-group">
            <label>Nama Cafe</label>
            <input
              type="text"
              value={namaCafe}
              onChange={(e) => setNamaCafe(e.target.value)}
              placeholder="Nama Cafe"
              required
            />
          </div>
          <div className="form-group">
            <label>Alamat</label>
            <input
              type="text"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Alamat"
              required
            />
          </div>
          <div className="form-group">
            <label>Tables</label>
            <input
              type="number"
              value={tables}
              onChange={(e) => setTables(e.target.value)}
              placeholder="Jumlah Tables"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/cafe")}
              className="btn back-btn"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CafeAdd;
