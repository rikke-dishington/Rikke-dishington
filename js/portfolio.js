// Render data about projects and create html for each project

import projects from "./data/projects.js";

const portfolioContainer = document.querySelector(".projects");

async function renderProjects() {
  try {
    portfolioContainer.innerHTML = ""; // Just clear the container without showing loading

    for (let i = 0; i < projects.length; i++) {
      const projectImage = projects[i].info.image;
      const projectImageAlt = projects[i].info.alt;
      const projectTitle = projects[i].info.title;
      const projectDescription = projects[i].info.description;
      const projectGitHub = projects[i].info.github;
      const projectSite = projects[i].info.site;
      const projectTech = projects[i].info.technologies;

      portfolioContainer.innerHTML += `
                                      <div class="project-card">
                                          <div class="project-content">
                                            <div class="image-container">
                                              <img src="${projectImage}" alt="${projectImageAlt}"/>
                                            </div>
                                            <h3>${projectTitle}</h3>
                                            <p>${projectDescription}</p>
                                            <div class="tech-stack">
                                                ${projectTech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                                            </div>
                                          </div>
                                          <div class="project-links">
                                            <a href="${projectGitHub}" class="cta">GitHub<i class="fa fa-github"></i></a>
                                            <a href="${projectSite}" class="cta">Live Site<i class="fa fa-arrow-right"></i></a>
                                          </div>  
                                      </div>`;
    }
  } catch (error) {
    console.error(error);
    portfolioContainer.innerHTML = `
      <div class="error-message">
        <i class="fa fa-exclamation-circle"></i>
        <p>Sorry, there was an error loading the projects.</p>
        <button onclick="renderProjects()">Try Again</button>
      </div>`;
  }
}

renderProjects();
