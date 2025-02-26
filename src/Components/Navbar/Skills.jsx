import React from 'react';
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-list">
          <a href="YOUR_HTML_CERTIFICATE_LINK" target="_blank" rel="noopener noreferrer">HTML</a>
          <a href="YOUR_CSS_CERTIFICATE_LINK" target="_blank" rel="noopener noreferrer">CSS</a>
          <a href="YOUR_JS_CERTIFICATE_LINK" target="_blank" rel="noopener noreferrer">JavaScript</a>
          <a href="YOUR_REACT_CERTIFICATE_LINK" target="_blank" rel="noopener noreferrer">React.js</a>
          <a href="YOUR_PHP_CERTIFICATE_LINK" target="_blank" rel="noopener noreferrer">PHP & MySQL</a>
          <a href="YOUR_GIT_CERTIFICATE_LINK" target="_blank" rel="noopener noreferrer">Git & GitHub</a>
          <a href="YOUR_UI_CERTIFICATE_LINK" target="_blank" rel="noopener noreferrer">UI/UX Design</a>
          <a href="YOUR_RESPONSIVE_CERTIFICATE_LINK" target="_blank" rel="noopener noreferrer">Responsive Design</a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
