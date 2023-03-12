// Render data about projects and create html for each project

import projects from "./data/projects.js";

const portfolioContainer = document.querySelector(".projects");

async function renderProjects() {
  try {
    portfolioContainer.innerHTML = "";

    for (let i = 0; i < projects.length; i++) {
      const projectImage = projects[i].info.image;
      const projectImageAlt = projects[i].info.alt;
      const projectTitle = projects[i].info.title;
      const projectDescription = projects[i].info.description;
      const projectGitHub = projects[i].info.github;
      const projectSite = projects[i].info.site;

      portfolioContainer.innerHTML += `
                                      <div class="project-card">
                                          <div class="project-content">
                                            <img src="${projectImage}" alt"${projectImageAlt}"/>
                                            <h3>${projectTitle}</h3>
                                            <p>${projectDescription}</p>
                                          </div>
                                          <div class="project-links">
                                            <a href="${projectGitHub}" class="cta">GitHub<i class="fa fa-github"></i></a>
                                            <a href="${projectSite}" class="cta">Live Site<i class="fa fa-arrow-right"></i></a>
                                          </div>  
                                      </div>`;
    }
  } catch (error) {
    console.log(error);
    portfolioContainer.innerHTML = displayError("Oh no! An error occurred");
  }
}

renderProjects();
