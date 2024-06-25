import React from 'react';
import "./navbar.css";

const Navbar =() =>{
    <nav>
    <div class="nav-wrapper" style={{color:"white"}}>
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="#">Coffee Finder</a></li>
        
      </ul>
    </div>
  </nav>
}

export default Navbar;