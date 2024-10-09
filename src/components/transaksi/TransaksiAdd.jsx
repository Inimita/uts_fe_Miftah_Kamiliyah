import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './TransaksiAdd.css'; 

const TransaksiAdd = () => {
  const [jumlahTotal, setJumlahTotal] = useState("");
  const [menuId, setMenuId] = useState("");
  const [reservasiId, setReservasiId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [cafeId, setCafeId] = useState("");
  const navigate = useNavigate();

  const saveTransaksi = async (e) => {
    e.preventDefault();
    try {
         await axios.post("http://localhost:3001/transaksi/post", {
            jumlah_total: jumlahTotal,
            MenuId: menuId,
            ReservasiId: reservasiId,
            CustomerId: customerId,
            CafeId: cafeId,
        });
        alert("Transaksi berhasil ditambahkan");
      navigate("/transaksi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={saveTransaksi} className="form">
          <div className="form-group">
            <label>Jumlah Total</label>
            <input
              type="number"
              value={jumlahTotal}
              onChange={(e) => setJumlahTotal(e.target.value)}
              placeholder="Jumlah Total"
              required
            />
          </div>
          <div className="form-group">
            <label>Menu ID</label>
            <input
              type="number"
              value={menuId}
              onChange={(e) => setMenuId(e.target.value)}
              placeholder="Menu ID"
              required
            />
          </div>
          <div className="form-group">
            <label>Reservasi ID</label>
            <input
              type="number"
              value={reservasiId}
              onChange={(e) => setReservasiId(e.target.value)}
              placeholder="Reservasi ID"
              required
            />
          </div>
          <div className="form-group">
            <label>Customer ID</label>
            <input
              type="number"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              placeholder="Customer ID"
              required
            />
          </div>
          <div className="form-group">
            <label>Cafe ID</label>
            <input
              type="number"
              value={cafeId}
              onChange={(e) => setCafeId(e.target.value)}
              placeholder="Cafe ID"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/transaksi")}
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

export default TransaksiAdd;
