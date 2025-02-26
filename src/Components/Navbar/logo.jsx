import React, { useState } from "react";
import "./Logo.css";

const Logo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="logo-container">
      <img
        src="/logo.png"
        alt="Logo"
        className="logo"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={`dropdown ${isOpen ? "show" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Logo;
