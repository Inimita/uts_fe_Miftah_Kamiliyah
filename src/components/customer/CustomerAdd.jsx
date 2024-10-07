import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './CustomerAdd.css'; // Menghubungkan file CSS

const CustomerAdd = () => {
  const [namaCustomer, setNamaCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const navigate = useNavigate();

  const saveCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/customer/post", {
        nama_customer: namaCustomer,
        email: email,
        no_telfon: noTelepon,
      });
      alert("Customer berhasil ditambahkan");
      navigate("/customer");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">    
      <div className="form-wrapper">
        <form onSubmit={saveCustomer} className="form">
          <div className="form-group">
            <label>Nama Customer</label>
            <input
              type="text"
              value={namaCustomer}
              onChange={(e) => setNamaCustomer(e.target.value)}
              placeholder="Nama Customer"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label>No. Telepon</label>
            <input
              type="text"
              value={noTelepon}
              onChange={(e) => setNoTelepon(e.target.value)}
              placeholder="No. Telepon"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/customer")}
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

export default CustomerAdd;
