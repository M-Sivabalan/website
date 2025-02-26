import React from 'react';
import "./Home.css";
import backImage from "../../assets/back.jpeg"; // Import the image

const Home = () => {
  return (
    <section id="home" className="home" style={{ backImage: `url(${backImage})` }}>
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a passionate Frontend Developer, skilled in React, JavaScript, and UI/UX Design.</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Home;
