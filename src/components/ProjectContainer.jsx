import React from "react";
import { projectsObject } from "../projectsObject";
import './ProjectContainer.css'

export const ProjectContainer = () => {
  const renderProjects = () => {
    const projectElements = [];

    for (let i = 0; i < projectsObject.length; i++) {
      projectElements.push(
        <div key={i} className='project-container'>
          <h3>{projectsObject[i].title}</h3>
          <div>{projectsObject[i].description}</div>
          <br />
          <div>Concepts: {projectsObject[i].concepts}</div>
          <div>Technologies: {projectsObject[i].technologies}</div>
          <br />
          <a className="links" href={projectsObject[i].github}>Github Repository</a>
          <a className="links" href={projectsObject[i].deployedSite}>Deployed Site</a>
          <br />
          <img className='image' src={projectsObject[i].image} />
        </div>
      );
    }

    return projectElements;
  };

  return (
    <>
      {renderProjects()}
    </>
  );
};


{/* <a href="//imgur.com/bpaErnx"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}