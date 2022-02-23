import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/npduval"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/nicholas-duval-mba-303688163/"
    },
    {
      name: "fa fa-envelope",
      link: "mailto:nicholaspduval74@gmail.com"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
