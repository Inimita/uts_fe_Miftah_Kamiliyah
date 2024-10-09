import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './TransaksiEdit.css'; // Menghubungkan file CSS

const TransaksiEdit = () => {
  const [jumlahTotal, setJumlahTotal] = useState("");
  const [menuId, setMenuId] = useState("");
  const [reservasiId, setReservasiId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [cafeId, setCafeId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTransaksiById();
  }, []);

  const getTransaksiById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/transaksi/${id}`);
      setJumlahTotal(response.data.jumlah_total);
      setMenuId(response.data.MenuId);
      setReservasiId(response.data.ReservasiId);
      setCustomerId(response.data.CustomerId);
      setCafeId(response.data.CafeId);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTransaksi = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/transaksi/update/${id}`, {
        jumlah_total: jumlahTotal,
        MenuId: menuId,
        ReservasiId: reservasiId,
        CustomerId: customerId,
        CafeId: cafeId,
      });
      navigate("/transaksi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerTransaksiEdit">
      <h1>Edit Transaksi</h1>
      <form onSubmit={updateTransaksi} className="formTransaksiEdit">
        <div className="formGroupTransaksiEdit">
          <label>Jumlah Total</label>
          <input
            type="number"
            className="inputTransaksiEdit"
            value={jumlahTotal}
            onChange={(e) => setJumlahTotal(e.target.value)}
          />
        </div>
        <div className="formGroupTransaksiEdit">
          <label>Menu ID</label>
          <input
            type="text"
            className="inputTransaksiEdit"
            value={menuId}
            onChange={(e) => setMenuId(e.target.value)}
          />
        </div>
        <div className="formGroupTransaksiEdit">
          <label>Reservasi ID</label>
          <input
            type="text"
            className="inputTransaksiEdit"
            value={reservasiId}
            onChange={(e) => setReservasiId(e.target.value)}
          />
        </div>
        <div className="formGroupTransaksiEdit">
          <label>Customer ID</label>
          <input
            type="text"
            className="inputTransaksiEdit"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </div>
        <div className="formGroupTransaksiEdit">
          <label>Cafe ID</label>
          <input
            type="text"
            className="inputTransaksiEdit"
            value={cafeId}
            onChange={(e) => setCafeId(e.target.value)}
          />
        </div>
        <button type="submit" className="btnTransaksiEdit">Update</button>
      </form>
    </div>
  );
};

export default TransaksiEdit;
