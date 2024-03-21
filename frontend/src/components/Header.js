// Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* My header content */}
      <nav className="topnav">
        <h1>My Webapp</h1>
        <Link className="active" to="/app">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
