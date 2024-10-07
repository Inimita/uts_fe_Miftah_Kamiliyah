import React from 'react';
import "./Dashboard.css"
import customer from "./asset/icons8-account-96.png"
import menu from "./asset/icons8-cafe-90.png"
import reservasi from "./asset/icons8-booking-90.png"
import transaksi from "./asset/icons8-bill-90.png"
import cafe from "./asset/icons8-shop-90.png"
import { Link } from 'react-router-dom';



const Dashbaords = () => {
  return (
    <div className='main'>
      <div className='card'>
      <h3><Link to= "/customer" className='link-dash'>Customer</Link></h3>
        <img src={customer}/>
        <p>Data Pelanggan</p>
      </div>
      <div className='card'>
      <h3><Link to="/menu" className='link-dash'>Menu</Link></h3>
        <img src={menu}/>
       <p>Data Menu</p>
      </div>
      <div className='card'>
      <h3><Link to ="/reservasi" className='link-dash'>Reservasi</Link></h3>
        <img src={reservasi}/>
        <p>Data Reservasi</p>
      </div>
      <div className='card'>
      <h3><Link to = "/transaksi" className='link-dash'>Transaksi</Link></h3>
        <img src={transaksi}/>
        <p>Data Transaksi</p>
      </div>
      <div className='card'>
      <h3><Link to = "/cafe" className='link-dash'>Cafe</Link></h3>
        <img src={cafe}/>
        <p>Data Penjualan Cafe</p>
      </div>
    
    </div>
  )
}

export default Dashbaords