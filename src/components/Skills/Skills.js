import React from 'react';

import './Skills.scss';
import wordpress from '../../img/wordpress.png';
import html5 from '../../img/html5.png';
import css3 from '../../img/css3.png';
import sass from '../../img/sass.png';
import js from '../../img/js.png';
import jquery from '../../img/jquery.png';
import react from '../../img/react.png';
import git from '../../img/git.png';
import firebase from '../../img/firebase.png';
import jira from '../../img/jira.png';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  document.getElementsByTagName('body')[0].style.overflow = 'auto';

  return (
    <div className="Skills">
      <div className="skills-container">
        <div className="section-heading" id="skills">
          <h2>{t('Tools.1')}</h2>
        </div>
        <div className="my-skills">
          <div className="skill">
            <div className="icon-container">
              <img src={wordpress} alt="skill" />
            </div>
            <h2>WordPress</h2>
          </div>
          <div className="skill">
            <div className="icon-container">
              <img src={html5} alt="skill" />
            </div>
            <h2>HTML5</h2>
          </div>
          <div className="skill">
            <div className="icon-container">
              <img src={css3} alt="skill" />
            </div>
            <h2>CSS3</h2>
          </div>
          <div className="skill">
            <div className="icon-container">
              <img src={sass} alt="skill" />
            </div>
            <h2>Sass</h2>
          </div>
          <div className="skill">
            <div className="icon-container">
              <img src={js} alt="skill" />
            </div>
            <h2>JavaScript</h2>
          </div>
          <div className="skill">
            <div className="icon-container">
              <img src={jquery} alt="skill" />
            </div>
            <h2>jQuery</h2>
          </div>
          <div className="skill">
            <div className="icon-container">
              <img src={react} alt="skill" />
            </div>
            <h2>React</h2>
          </div>

          <div className="skill">
            <div className="icon-container">
              <img src={git} alt="skill" />
            </div>
            <h2>Git</h2>
          </div>
          <div className="skill">
            <div className="icon-container">
              <img src={firebase} alt="skill" />
            </div>
            <h2>Firebase</h2>
          </div>
          <div className="skill">
            <div className="icon-container">
              <img src={jira} alt="skill" />
            </div>
            <h2>Jira</h2>
          </div>
        </div>
        <a href="https://www.iconfinder.com/Flatart">Icons by Flatart</a>
      </div>
    </div>
  );
};

export default Skills;
