import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './TransaksiList.css'; // Menghubungkan file CSS vanilla

const TransaksiList = () => {
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    getTransaksi();
  }, []);

  // Fungsi untuk mengambil daftar transaksi dari API
  const getTransaksi = async () => {
    try {
      const response = await axios.get("http://localhost:3001/transaksi");
      setTransaksi(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fungsi untuk menghapus transaksi berdasarkan ID
  const deleteTransaksi = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/transaksi/delete/${id}`);
      getTransaksi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerTransaksiList">
      <div className="headerTransaksiList">
        <h1>Transaksi List</h1>
        <Link to="/transaksi/add" className="addBtnTransaksiList">Add New</Link>
      </div>

      <div className="tableWrapperTransaksiList">
        <table className="transaksiTable">
          <thead>
            <tr>
              <th>No</th>
              <th>Jumlah Total</th>
              <th>Menu ID</th>
              <th>Reservasi ID</th>
              <th>Customer ID</th>
              <th>Cafe ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.jumlah_total}</td>
                <td>{item.MenuId}</td>
                <td>{item.ReservasiId}</td>
                <td>{item.CustomerId}</td>
                <td>{item.CafeId}</td>
                <td>
                  <button className="editBtnTransaksiList">
                    <Link to={`/transaksi/edit/${item.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteTransaksi(item.id)}
                    className="deleteBtnTransaksiList"
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

export default TransaksiList;
