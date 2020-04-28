import React from 'react';
import "./Skill.css";

const skills = [
    {
        name : "React",
        url : "https://reactjs.org/"
    },
    {
        name :"React-Native",
        url : "https://facebook.github.io/react-native/"

    },
    {name :"Express",
    url :"https://expressjs.com/"
    },

    {
        name: "Node.js",
        url: "https://nodejs.org/"
    }
    ,
    {name :"Spring ",
     url :"https://spring.io/projects/spring-boot"
    },
    {
        name : "Javascript",
        url :"https://www.javascript.com/"
    }
]

const Skills =()=>(
    <ul className ="skills">
    {skills.map((skill,i)=>(
       <li key= {skill.name}>
       <a target="_blank" rel ="noopener noreferrer" title={skill.name} href ={skill.url}>
       {skill.name}
       </a>
       
       </li> 
    ))}
    </ul>
)

export default Skills ;