import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ReservasiList.css'; // Menghubungkan file CSS vanilla

const ReservasiList = () => {
  const [reservasi, setReservasi] = useState([]);

  useEffect(() => {
    getReservasi();
  }, []);

  const getReservasi = async () => {
    try {
      const response = await axios.get("http://localhost:3001/reservasi");
      setReservasi(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReservasi = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/reservasi/delete/${id}`);
      getReservasi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerReservasiList">
      <div className="headerReservasiList">
        <h1>Reservasi List</h1>
        <Link to="/reservasi/add" className="addBtnReservasiList">Add New</Link>
      </div>

      <div className="tableWrapperReservasiList">
        <table className="reservasiTable">
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal Reservasi</th>
              <th>Kapasitas</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservasi.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.tanggal_reservasi}</td>
                <td>{item.kapasitas}</td>
                <td>
                  <button className="editBtnReservasiList">
                    <Link to={`/reservasi/edit/${item.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteReservasi(item.id)}
                    className="deleteBtnReservasiList"
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

export default ReservasiList;
