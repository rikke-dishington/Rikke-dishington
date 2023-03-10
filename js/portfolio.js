// Render data about projects and create html for each project

import projects from "./data/projects.js";

const portfolioContainer = document.querySelector(".projects");

async function renderProjects() {
  try {
    portfolioContainer.innerHTML = "";

    for (let i = 0; i < projects.length; i++) {
      const projectImage = projects[i].info.image;
      const projectTitle = projects[i].info.title;
      const projectDescription = projects[i].info.description;

      portfolioContainer.innerHTML += `
                                      <div class="project">
                                      <img src="${projectImage}" />
                                          <div class="project-information">
                                            <h3>${projectTitle}</h3>
                                            <p>${projectDescription}</p>
                                          </div>
                                        </div>`;
    }
  } catch (error) {
    console.log(error);
    portfolioContainer.innerHTML = displayError("Oh no! An error occurred");
  }
}

renderProjects();
