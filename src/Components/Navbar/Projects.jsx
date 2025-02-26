import React from 'react';
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        
        {/* Scrollable Projects List */}
        <div className="project-list">
          <div className="project-item">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website built with React.js and deployed on Vercel.</p>
            <a href="https://sivabalandev.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>

          <div className="project-item">
            <h3>Leave Management System</h3>
            <p>A PHP & MySQL-based system for handling leave applications with email notifications.</p>
            <a href="https://github.com/YOUR_GITHUB/leave-management" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>

          <div className="project-item">
            <h3>SIGNMEET - Word Level Sign Language Recognition</h3>
            <p>This project helps DEAF & DUMB individuals with interview preparation. To know more, click the link.</p>
            <a href="https://github.com/YOUR_GITHUB/signmeet" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
