import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './ReservasiEdit.css'; // Menghubungkan file CSS

const ReservasiEdit = () => {
  const [tanggalReservasi, setTanggalReservasi] = useState("");
  const [kapasitas, setKapasitas] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getReservasiById();
  }, []);

  const getReservasiById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/reservasi/find/${id}`);
      setTanggalReservasi(response.data.tanggal_reservasi);
      setKapasitas(response.data.kapasitas);
    } catch (error) {
      console.log(error);
    }
  };

  const updateReservasi = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/reservasi/update/${id}`, {
        tanggal_reservasi: tanggalReservasi,
        kapasitas,
      });
      navigate("/reservasi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerReservasiEdit">
      <h1>Edit Reservasi</h1>
      <form onSubmit={updateReservasi} className="formReservasiEdit">
        <div className="formGroupReservasiEdit">
          <label>Tanggal Reservasi</label>
          <input
            type="date"
            className="inputReservasiEdit"
            value={tanggalReservasi}
            onChange={(e) => setTanggalReservasi(e.target.value)}
          />
        </div>
        <div className="formGroupReservasiEdit">
          <label>Kapasitas</label>
          <input
            type="number"
            className="inputReservasiEdit"
            value={kapasitas}
            onChange={(e) => setKapasitas(e.target.value)}
          />
        </div>
        <button type="submit" className="btnReservasiEdit">Update</button>
      </form>
    </div>
  );
};

export default ReservasiEdit;
