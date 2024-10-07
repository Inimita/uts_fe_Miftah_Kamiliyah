import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './menuAdd.css'; // Menghubungkan file CSS

const MenuAdd = () => {
  const [namaMenu, setNamaMenu] = useState("");
  const [harga, setHarga] = useState("");
  const [jenisMenu, setJenisMenu] = useState("");
  const navigate = useNavigate();

  const saveMenu = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/menu/post", {
        nama_menu: namaMenu,
        harga: harga,
        jenis_menu: jenisMenu,
      });
      alert("Menu berhasil ditambahkan");
      navigate("/menu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={saveMenu} className="form">
          <div className="form-group">
            <label>Nama Menu</label>
            <input
              type="text"
              value={namaMenu}
              onChange={(e) => setNamaMenu(e.target.value)}
              placeholder="Nama Menu"
              required
            />
          </div>
          <div className="form-group">
            <label>Harga</label>
            <input
              type="text"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              placeholder="Harga"
              required
            />
          </div>
          <div className="form-group">
            <label>Jenis Menu</label>
            <input
              type="text"
              value={jenisMenu}
              onChange={(e) => setJenisMenu(e.target.value)}
              placeholder="Jenis Menu"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/menu")}
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

export default MenuAdd;
