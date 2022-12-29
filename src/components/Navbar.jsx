import React, {useState} from "react";
import {ReactComponent as FaBar} from '../icons/FaBar.svg'
import {ReactComponent as CloseBar} from '../icons/CloseBar.svg'
import "./navbar.css";

const Navbar = () => {
    const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="navbar">
      <div>
        <h1>Devang</h1>
      </div>
      <ul className="nav-list">
        {links.map(({ id, link }) => (
          <li key={id}>{link}</li>
        ))}
      </ul>
      <div  className="nav-icon" 
      onClick={()=> setNav(!nav)}
      >
        {nav ? <CloseBar className="fill-gray-500 h-10 w-10" /> :<FaBar    className="fill-gray-500 h-10 w-8"/> }
      </div>
      {nav && (
        <ul className="mob-nav-list">
             {links.map(({ id, link }) => (
          <li key={id}>{link}</li>
        ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
