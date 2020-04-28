import React from 'react';

import './Projects.css';

const projects =[
    {name :"Rick and Morty Character Info (React) ",
        url :"https://github.com/sampad789/RickandMortyCharacterCards"
    },
    {
        name : "Message Board (React) ",
        url :" https://github.com/sampad789/reactApp-"
    },
    {
        name :"Daily  Horoscope Cards (React)",
        url :"https://github.com/sampad789/React_Horoscope_materialui-"
    },
    {
        name :"Simple Idea list (Express & Mongodb)",
        url :"https://github.com/sampad789/expresssBackend_Mongodb"
    },
    {
        name : "Bootstrap Cheat Sheet (CSS)",
        url :"https://github.com/sampad789/bootstrap_cheatsheet"
    },
    {
        name :"Fortnite Stats & Latest News(React Native)",
        url :"https://github.com/sampad789/Fortnite-stats-landing"
    },
    {
        name :"Simple Music Forum (Spring Boot)",
        url :"https://github.com/sampad789/musicForum"
    }

] 

const Projects = () =>(
    <ul className="projects">
   {projects.map((project,i)=>(
       <li key = {project.name}>
       <a target ="_blank" rel ="noopener noreferrer" title={project.name} href={project.url}>
       {project.name}
       </a>
       </li>

    ))}

    </ul>
)

export default Projects;