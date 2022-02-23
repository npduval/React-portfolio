import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'dog-adoption',
      description: 'Javascript, API',
      link: "https://cluck135.github.io/Dog-Adoption-Site/",
      repo: "https://github.com/cluck135/Dog-Adoption-Site"
    },
    {
      name: 'text-editor',
      description: 'Progressive Web Application',
      link: "https://text-editor1.herokuapp.com/",
      repo: "https://github.com/npduval/Text-Editor"
    },
    {
      name: 'password-generator',
      description: 'Javascript',
      link: "https://npduval.github.io/Password-Generator/",
      repo: "https://github.com/npduval/Password-Generator"
    },
    {
      name: 'readme-generator',
      description: 'Node.js',
      link: "https://drive.google.com/file/d/1xeRtpzl9Tcj8W-fHFUOcxcQM9l8tNEyA/view?usp=sharing",
      repo: "https://github.com"
    },
    {
      name: 'weather-dashboard',
      description: 'JavaScript/API',
      link: "https://npduval.github.io/Weather-Dashboard/",
      repo: "https://github.com/npduval/Weather-Dashboard"
    },
    {
      name: 'social-network',
      description: 'Express.js, MongoDB',
      link: "https://watch.screencastify.com/v/VRORTMu1IdhYHDaOCoTR",
      repo: "https://github.com/npduval/Social-Network-API"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
