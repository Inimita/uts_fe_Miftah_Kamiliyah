import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import './CafeEdit.css'; // Import CSS yang spesifik untuk CafeEdit

const CafeEdit = () => {
  const [namaCafe, setNamaCafe] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tables, setTables] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCafeById();
  }, []);

  const updateCafe = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/cafe/update/${id}`, {
        nama: namaCafe,
        alamat,
        tables,
      });
      navigate("/cafe");
    } catch (error) {
      console.log(error);
    }
  };

  const getCafeById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cafe/${id}`);
      setNamaCafe(response.data.nama);
      setAlamat(response.data.alamat);
      setTables(response.data.tables);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cafeEdit-container">
      <h1 className="cafeEdit-title">Edit Cafe</h1>
      <form onSubmit={updateCafe} className="cafeEdit-form">
        <div className="cafeEdit-form-group">
          <label className="cafeEdit-label">Nama Cafe</label>
          <input
            type="text"
            className="cafeEdit-input"
            value={namaCafe}
            onChange={(e) => setNamaCafe(e.target.value)}
            placeholder="Nama Cafe"
          />
        </div>

        <div className="cafeEdit-form-group">
          <label className="cafeEdit-label">Alamat</label>
          <input
            type="text"
            className="cafeEdit-input"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat"
          />
        </div>

        <div className="cafeEdit-form-group">
          <label className="cafeEdit-label">Tables</label>
          <input
            type="number"
            className="cafeEdit-input"
            value={tables}
            onChange={(e) => setTables(e.target.value)}
            placeholder="Jumlah Tables"
          />
        </div>

        <div className="cafeEdit-flex">
          <button type="submit" className="cafeEdit-button cafeEdit-submit-btn">
            Update Cafe
          </button>
          <button type="button" className="cafeEdit-button cafeEdit-back-btn">
            <Link to="/cafe/list">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CafeEdit;
