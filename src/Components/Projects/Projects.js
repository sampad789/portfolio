import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Projects.css";

const Projects = () => {
  // Using React Hooks
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getallReposName();
  }, []);

  const getallReposName = () => {
    axios
      .get(`https://api.github.com/users/sampad789/repos`)
      .then((res) => {
        setRepos(res.data);
      })
      .catch(function(error) {
        // handle error
        console.log("Error on fetch");
      });
  };

  //console.log(repos);

  return (
    <ul className="projects">
      {repos.map((repos, i) => (
        <li key={repos.description}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title={repos.description}
            href={repos.html_url}
          >
            {repos.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
