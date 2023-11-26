import React from "react";

import "./Projects.scss";
import foody from "../../img//foody.jpg";
import finder from "../../img//finder.jpg";
import builder from "../../img/builder.jpg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  document.getElementsByTagName("body")[0].style.overflow = "auto";

  return (
    <div className="Projects" id="proj">
      <div className="projectsContainer">
        <div className="my-projects">
          <div className="project">
            <h6>HTML5 CSS3 SASS</h6>
            <img src={foody} alt="project"></img>
            <h2>Food Restaurant App</h2>
            <p>{t("Foody.1")}</p>
            <a
              href="https://kind-morse-bbc4ac.netlify.app/"
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Live.1")}
            </a>
            <a
              href="https://github.com/1haker/food-app"
              className="cta github"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Github.1")}
            </a>
          </div>
          <div className="project">
            <h6>JAVASCRIPT HTML5 CSS3 SASS</h6>
            <img src={finder} alt="project"></img>
            <h2>Food Finder</h2>
            <p>{t("Foodfinder.1")}</p>
            <a
              href="https://fervent-pare-ac13e2.netlify.app/"
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Live.1")}
            </a>
            <a
              href="https://github.com/1haker/food-finder"
              className="cta github"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Github.1")}
            </a>
          </div>
          <div className="project">
            <h6>REACT JAVASCRIPT HTML5 CSS3 SASS</h6>
            <img src={builder} alt="project"></img>
            <h2>Food Builder</h2>
            <p>{t("Foodbuilder.1")}</p>
            <a
              href="https://food-builder-17e1e.web.app/"
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Live.1")}
            </a>
            <a
              href="https://github.com/1haker/food-builder"
              className="cta github"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Github.1")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
