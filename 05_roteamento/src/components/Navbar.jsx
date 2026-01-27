import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Navbar = () => {
  const isAuth = false;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <SearchForm />
    </nav>
  );
};

export default Navbar;
