import React from "react";
import "./Social.css";
import cv from "./assets/samResume2022.pdf";
const socials = [
  {
    name: "linkedin",
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/sampurna-gautam",
  },
  {
    name: "git-hub",
    icon: "fab fa-github",
    url: "https://github.com/sampad789",
  },
  {
    name: "CV",
    icon: "fas fa-file",
    url: cv,
  },
];

const Socials = () => (
  <ul className="socials">
    {socials.map((social, i) => (
      <li key={social.name}>
        <a target="_blank" rel="noopener noreferrer" href={social.url} download>
          <i className={social.icon} />
        </a>
      </li>
    ))}
  </ul>
);
export default Socials;
