import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css"
import Dashbaords from "./components/Dashbaords";
import Customer from "./components/customer/CustomerList";
import Menu from "./components/menu/MenuList";
import Cafe from "./components/cafe/CafesList";
import MenuAdd from "./components/menu/menuAdd";
import MenuEdit from "./components/menu/menuEdit";
import Reservasi from "./components/reservasi/ReservasiList";
import ReservasiAdd from "./components/reservasi/ReservasiAdd";
import ReservasiEdit from "./components/reservasi/ReservasiEdit";
import CustomerAdd from "./components/customer/CustomerAdd";
import CustomerEdit from "./components/customer/CustomerEdit";
import CafeAdd from "./components/cafe/CafeAdd";
import CafeEdit from "./components/cafe/CafeEdit";
import TransaksiList from "./components/transaksi/TransaksiList";
import TransaksiAdd from "./components/transaksi/TransaksiAdd";
import TransaksiEdit from "./components/transaksi/TransaksiEdit";

function App() {
  return (
    <>
     <BrowserRouter   basename="/testt/">
      <div>
        <Navbar />
        <div>git 
          <Routes>
            <Route path="/" element={<Dashbaords />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/add" element={<CustomerAdd />} />
            <Route path="/customer/edit/:id" element={<CustomerEdit />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/add" element={<MenuAdd />} />
            <Route path="/menu/edit/:id" element={<MenuEdit />} />
            <Route path="/reservasi" element={<Reservasi />} />
            <Route path="/reservasi/add" element={<ReservasiAdd />} />
            <Route path="/reservasi/edit/:id" element={<ReservasiEdit />} />
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/cafe/add" element={<CafeAdd />} />
            <Route path="/cafe/edit/:id" element={<CafeEdit />} />
            <Route path="/transaksi" element={<TransaksiList />} />
            <Route path="/transaksi/add" element={<TransaksiAdd />} />
            <Route path="/transaksi/edit/:id" element={<TransaksiEdit />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
