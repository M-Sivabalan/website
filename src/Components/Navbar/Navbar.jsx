import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logoImage from "../../assets/logo.jpg"; // Ensure this path is correct

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar ${scrolling ? "scrolled" : ""}`}>
            {/* Logo with dropdown */}
            <div className="logo-container" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src={logoImage} alt="logo" className="logo" />
                <div className={`dropdown ${dropdownOpen ? "show" : ""}`}>
                    <a href="#profile">Profile</a>
                    <a href="#settings">Settings</a>
                    <a href="#logout">Logout</a>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
