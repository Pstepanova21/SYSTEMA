import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import User from "../../assets/images/user 1.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={User} alt="User" className="logo" />
        <ul>
          <li>
            <Link to="/">О НАС</Link>
          </li>
          <li>
            <Link to="/employees">СОТРУДНИКИ</Link>
          </li>
          <li>
            <Link to="/reviews">ОТЗЫВЫ</Link>
          </li>
          <li>
            <Link to="/map">КАРТА</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
