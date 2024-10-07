import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css"
import Dashbaords from "./components/Dashbaords";
import Customer from "./components/customer/CustomerList";
import Menu from "./components/menu/MenuList";
import Transaksi from "./components/transaksi/Transaksi";
import Cafe from "./components/cafe/Cafe";
import MenuAdd from "./components/menu/menuAdd";
import MenuEdit from "./components/menu/menuEdit";
import Reservasi from "./components/reservasi/ReservasiList";
import ReservasiAdd from "./components/reservasi/ReservasiAdd";
import ReservasiEdit from "./components/reservasi/ReservasiEdit";
import CustomerAdd from "./components/customer/CustomerAdd";
import CustomerEdit from "./components/customer/CustomerEdit";

function App() {
  return (
    <>
     <BrowserRouter basename="/uts-miftah-kamiliyah.github.io/">
      <div>
        <Navbar />
        <div>
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
            <Route path="/transaksi" element={<Transaksi />} />
            <Route path="/cafe" element={<Cafe />} />
        
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
