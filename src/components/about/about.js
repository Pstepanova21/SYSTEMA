import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>SYSTEMA</h1>
      </div>
      <div className="about-content">
        <h2>
          SYSTEMA - ЭТО ЗАХВАТЫВАЮЩИЙ <br />
          ТЕМАТИЧЕСКИЙ КВЕСТ!
        </h2>
        <p>
          КОМАНДЫ УЧАСТНИКОВ, СПРАВЛЯЯСЬ С ЛОГИЧЕСКИМИ ЗАДАЧАМИ И РАШИФРОВЫВАЯ
          ШИФРЫ, ПОЛУЧАТ НЕЗАБЫВАЕМЫЕ ЭМОЦИИ.
        </p>
        <h2>ПРАВИЛА</h2>
        <ul>
          <li>СОСТАВ КОМАНДЫ: 5 – 10 ЧЕЛОВЕК</li>
          <li>ОБЯЗАТЕЛЬНО НАЗВАНИЕ</li>
          <li>НАЛИЧИЕ ПРИЛОЖЕНИЯ ВК У КАПИТАНА</li>
          <li>ОРИЕНТИРУЕМСЯ НА 1 КУРС</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
