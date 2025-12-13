import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <section>
        <Link to="/">Home</Link>
      </section>
      <section>
        <Link to="/About">About</Link>
      </section>
      <section>
        <Link to="/Contact">Contact</Link>
      </section>
      <section>
        <Link to="/Service">Service</Link>
      </section>
    </div>
  );
}

export default Navbar;
