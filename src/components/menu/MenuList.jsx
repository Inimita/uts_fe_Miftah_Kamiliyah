// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import './MenuList.css'; // Menghubungkan file CSS

// const MenuList = () => {
//   const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     getMenu();
//   }, []);

//   const getMenu = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/menu");
   
//       setMenu(response.data);
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };

//   const deleteMenu = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3001/menu/delete/${id}`);
//       //bener ga
//       getMenu();
//     } catch (error) {
//       console.error("Error deleting menu:", error);
//     }
//   };

//   return (
//     <div className="box">
//       <div className="header">
//         <h1 className="title">Menu List</h1>
//         <Link to="/menu/add" className="add-button">Add New</Link>
//       </div>
//       <div className="card">
//         <div className="grid-container">
//           {menu.map((o, i) => (
//             <div className="menu-card" key={o.id}>
//               <div className="menu-image">
//                 {o.image ? (
//                   <img src={o.image} alt="Menu" />
//                 ) : (
//                   <span>No Image Available</span>
//                 )}
//               </div>
//               <div className="menu-info">
//                 <h1>No : {i + 1} | ID : {o.id}</h1>
//                 <h1>Nama Menu : {o.nama_menu}</h1>
//                 <h1>Harga : {o.harga}</h1>
//                 <h1>Jenis Menu : {o.jenis_menu}</h1>
//                 <div className="buttons">
//                   <Link to={`/menu/edit/${o.id}`} className="edit-button">Edit</Link>
//                   <button onClick={() => deleteMenu(o.id)} className="delete-button">Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './MenuList.css'; // Menghubungkan file CSS

const MenuList = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const response = await axios.get("http://localhost:3001/menu");
    setMenu(response.data);
  };

  const deleteMenu = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/menu/delete/${id}`);
      getMenu();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-menu">
      <menuWrapper>

      <div className="header">
        <div className="header-menu">
        
        <h1>Menu List</h1>
          <Link to="/menu/add" className="add-btn">Add New</Link>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="menu-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Menu</th>
              <th>Harga</th>
              <th>Jenis Menu</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama_menu}</td>
                <td>{item.harga}</td>
                <td>{item.jenis_menu}</td>
                <td>
                  <button className="edit-btn">
                    <Link to={`/menu/edit/${item.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteMenu(item.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </menuWrapper>

    </div>
  );
};

export default MenuList;
