import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
       <div>
        <h1>Devang</h1>
            </div>
        <ul className='nav-list'>
            <li>Home</li>
        </ul>
    </div>
  )
}

export default Navbar