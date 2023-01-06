import React from 'react'
import data from '../data/data';
import './styles/projects.css'
function Projects() {
  return (
    <section className='projects-section'>
      <h1 className='title'>Projects</h1>
      <ul className='scrollable-div'>
        {data.projects.map((project, index) =>
          <li className='project-card ' key={index}>
              <img className='project-image' 
              src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" 
              />
              <div>
                <h2>{project.name}</h2>
                <a className='button button-primary' href={project.link}> live demo </a>
                <span> date: {project.date}</span>
              </div>
          </li>
        )}
      </ul>
      
    </section>
  )
};

export default Projects