import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import './MenuEdit.css'; // Import CSS dengan nama class spesifik

const MenuEdit = () => {
  const [namaMenu, setNamaMenu] = useState("");
  const [harga, setHarga] = useState("");
  const [jenisMenu, setJenisMenu] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMenuById();
  }, []);

  const updateMenu = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/menu/update/${id}`, {
        nama_menu: namaMenu,
        harga,
        jenis_menu: jenisMenu,
      });
      navigate("/menu");
    } catch (error) {
      console.log(error);
    }
  };

  const getMenuById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/menu/find/${id}`);
      setNamaMenu(response.data.nama_menu);
      setHarga(response.data.harga);
      setJenisMenu(response.data.jenis_menu);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="menuEdit-container">
      <h1 className="menuEdit-title">Edit Menu</h1>
      <form onSubmit={updateMenu} className="menuEdit-form">
        <div className="menuEdit-form-group">
          <label className="menuEdit-label">Nama Menu</label>
          <input
            type="text"
            className="menuEdit-input"
            value={namaMenu}
            onChange={(e) => setNamaMenu(e.target.value)}
            placeholder="Nama Menu"
          />
        </div>

        <div className="menuEdit-form-group">
          <label className="menuEdit-label">Harga</label>
          <input
            type="number"
            className="menuEdit-input"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            placeholder="Harga"
          />
        </div>

        <div className="menuEdit-form-group">
          <label className="menuEdit-label">Jenis Menu</label>
          <select
            className="menuEdit-select"
            value={jenisMenu}
            onChange={(e) => setJenisMenu(e.target.value)}
          >
            <option value="Makanan">Makanan</option>
            <option value="Minuman">Minuman</option>
          </select>
        </div>

        <div className="menuEdit-flex">
          <button type="submit" className="menuEdit-button menuEdit-submit-btn">
            Update Menu
          </button>
          <button type="button" className="menuEdit-button menuEdit-back-btn">
            <Link to="/menu/list">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuEdit;
