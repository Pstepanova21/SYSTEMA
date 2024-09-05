import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import User from "../../assets/images/user 1.png";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <nav>
          <img
            src={User}
            alt="User"
            className="logo"
            onClick={handleUserIconClick}
          />
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

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Вход</h2>
            <form>
              <label>
                Логин:
                <input type="text" name="username" />
              </label>
              <label>
                Пароль:
                <input type="password" name="password" />
              </label>
              <button type="submit">Войти</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
