import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Employees from "./components/employees/employees";
import Reviews from "./components/reviews/reviews";
import Map from "./components/map/map";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/map" element={<Map />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
