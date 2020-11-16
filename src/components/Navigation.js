import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo/ofus_logo.svg'
function Navigation() {
  const logoStyle={fontSize:'14px', position:'relative', left:'-5px'}
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark' >
      <Link className="navbar-brand ml-5" to="/">
        <img src={logo} alt='logo' width='30' height='30'/>
        <span style={logoStyle}>OFUS</span>
      </Link>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to='/about' className='nav-link'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
