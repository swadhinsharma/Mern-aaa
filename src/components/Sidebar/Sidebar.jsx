import React from "react"
import './Sidebar.css'
import {Link} from 'react-router-dom'
// import add_product_icon from '../../assets/Product_Cart.svg'
// import list_product_icon from '../../assets/Product_list_icon.svg'

const Sidebar=()=> {

  return (
    <div className="sidebar">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src="https://tse2.mm.bing.net/th?id=OIP._PxenCnInwfF8Syr0D4UaAHaFj&pid=Api&P=0&h=180" alt=""/ >
                <p>Add New Hotels</p>
            </div>
        </Link>
        <Link to={'/order'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src="https://icon-library.com/images/icon-for-hotel/icon-for-hotel-26.jpg" alt=""/>
                <p> All Hotels List</p>
            </div>
        </Link>
        
        <Link to={'/clientdata'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src="https://tse4.mm.bing.net/th?id=OIP.lJDftVMr58wdM1kn6ZWvkwHaHa&pid=Api&P=0&h=180" alt=""/>
                <p> Client All Data </p>
            </div>
        </Link>



    </div>
  )
}

export default Sidebar
