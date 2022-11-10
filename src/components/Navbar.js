import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Logo</NavLink>
      <div>
        <NavLink to="/movies">Movies</NavLink>
        <br />
        <NavLink to="/series">Series</NavLink>
      </div>
    </nav>
  );
}
