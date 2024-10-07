import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import './CustomerEdit.css'; // Import CSS dengan nama class spesifik

const CustomerEdit = () => {
  const [namaCustomer, setNamaCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCustomerById();
  }, []);

  const updateCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/customer/update/${id}`, {
        nama_customer: namaCustomer,
        email,
        no_telfon: noTelepon,
      });
      navigate("/customer");
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomerById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/customer/find/${id}`);
      setNamaCustomer(response.data.nama_customer);
      setEmail(response.data.email);
      setNoTelepon(response.data.no_telfon);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="customerEdit-container">
      <h1 className="customerEdit-title">Edit Customer</h1>
      <form onSubmit={updateCustomer} className="customerEdit-form">
        <div className="customerEdit-form-group">
          <label className="customerEdit-label">Nama Customer</label>
          <input
            type="text"
            className="customerEdit-input"
            value={namaCustomer}
            onChange={(e) => setNamaCustomer(e.target.value)}
            placeholder="Nama Customer"
          />
        </div>

        <div className="customerEdit-form-group">
          <label className="customerEdit-label">Email</label>
          <input
            type="email"
            className="customerEdit-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="customerEdit-form-group">
          <label className="customerEdit-label">No. Telepon</label>
          <input
            type="text"
            className="customerEdit-input"
            value={noTelepon}
            onChange={(e) => setNoTelepon(e.target.value)}
            placeholder="No. Telepon"
          />
        </div>

        <div className="customerEdit-flex">
          <button type="submit" className="customerEdit-button customerEdit-submit-btn">
            Update Customer
          </button>
          <button type="button" className="customerEdit-button customerEdit-back-btn">
            <Link to="/customer/list">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerEdit;
