import React from 'react';

import './Projects.scss';
import foody from '../../img/foody.PNG';
import finder from '../../img/finder.PNG';
import builder from '../../img/builder.PNG';
import zakopane from '../../img/zakopane.PNG';
import order from '../../img/order-food.PNG';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  document.getElementsByTagName('body')[0].style.overflow = 'auto';

  return (
    <div className="Projects">
      <div className="projectsContainer">
        <div className="my-projects">
          <div className="project">
            <h6>HTML5 CSS3 SASS</h6>
            <img src={foody} alt="project"></img>
            <h2>Food Restaurant App</h2>
            <p>{t('Foody.1')}</p>
            <a
              href="https://kind-morse-bbc4ac.netlify.app/"
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LIVE
            </a>
            <a
              href="https://github.com/1haker/food-app"
              className="cta github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB CODE
            </a>
          </div>
          <div className="project">
            <h6>JAVASCRIPT HTML5 CSS3 SASS</h6>
            <img src={finder} alt="project"></img>
            <h2>Food Finder</h2>
            <p>{t('Foodfinder.1')}</p>
            <a
              href="https://admiring-noyce-914b18.netlify.app/"
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LIVE
            </a>
            <a
              href="https://github.com/1haker/food-finder"
              className="cta github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB CODE
            </a>
          </div>
          <div className="project">
            <h6>REACT JAVASCRIPT HTML5 CSS3 SASS</h6>
            <img src={builder} alt="project"></img>
            <h2>Food Builder</h2>
            <p>{t('Foodbuilder.1')}</p>
            <a
              href="https://food-builder-17e1e.web.app/"
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LIVE
            </a>
            <a
              href="https://github.com/1haker/food-builder"
              className="cta github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB CODE
            </a>
          </div>
          <div className="project">
            <h6>WordPress ELEMENTOR</h6>
            <img src={zakopane} alt="project"></img>
            <h2>Zakopane App</h2>
            <p>{t('Zakopane.1')}</p>
            <a
              href="https://1haker.github.io/zakopane-app/"
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LIVE
            </a>
            <a
              href="https://github.com/1haker/zakopane-app"
              className="cta github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB CODE
            </a>
          </div>
          <div className="project">
            <h6>WordPress THEMIFY</h6>
            <img src={order} alt="project"></img>
            <h2>Order Food</h2>
            <p>{t('Orderfood.1')}</p>
            <a
              href="https://1haker.github.io/Order-Food/"
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LIVE
            </a>
            <a
              href="https://github.com/1haker/Order-Food"
              className="cta github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB CODE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
