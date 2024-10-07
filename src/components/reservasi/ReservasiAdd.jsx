import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ReservasiAdd.css'; // Menghubungkan file CSS

const ReservasiAdd = () => {
  const [tanggalReservasi, setTanggalReservasi] = useState("");
  const [kapasitas, setKapasitas] = useState("");
  const navigate = useNavigate();

  const saveReservasi = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/reservasi/add", {
        tanggal_reservasi: tanggalReservasi,
        kapasitas: kapasitas,
      });
      alert("Reservasi berhasil ditambahkan");
      navigate("/reservasi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={saveReservasi} className="form">
          <div className="form-group">
            <label>Tanggal Reservasi</label>
            <input
              type="date"
              value={tanggalReservasi}
              onChange={(e) => setTanggalReservasi(e.target.value)}
              placeholder="Tanggal Reservasi"
              required
            />
          </div>
          <div className="form-group">
            <label>Kapasitas</label>
            <input
              type="number"
              value={kapasitas}
              onChange={(e) => setKapasitas(e.target.value)}
              placeholder="Kapasitas"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/reservasi")}
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

export default ReservasiAdd;
