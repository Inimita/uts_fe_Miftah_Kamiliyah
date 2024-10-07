import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return(
        <nav className="container">
            <containerWrapper>

            
            <div>
            <h1>Admin</h1>
            </div>
            <ul className="menu">
                <li><Link to="/customer" className="link">Customer</Link></li>
                <li><Link to="/menu" className="link">Menu</Link></li> 
                <li><Link to="/reservasi" className="link">Reservasi</Link></li>  
                <li><Link to="/transaksi" className="link">Transaksi</Link></li>  
                <li><Link to="/cafe" className="link">Cafe</Link></li> 
            </ul> 
            </containerWrapper>

        </nav>
    )
}

export default Navbar