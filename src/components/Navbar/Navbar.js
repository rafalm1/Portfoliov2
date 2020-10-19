import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { toggleOverflowMenu } from '../base';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  function changeLang(lang) {
    i18n.changeLanguage(lang);
  }

  toggleOverflowMenu();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var nav = document.querySelector('nav');
      nav.classList.toggle('sticky', window.scrollY > 0);
    });

    const menuBar = document.getElementById('menu');
    const navUL = document.getElementById('nav-ul');
    const navULli = document.querySelectorAll('#nav-ul li');
    const navLi = Array.from(navULli);

    navLi.forEach((element) => {
      element.addEventListener('click', () => {
        menuBar.classList.remove('change');
        navUL.classList.remove('change');
      });
    });

    menuBar.addEventListener('click', () => {
      menuBar.classList.toggle('change');
      navUL.classList.toggle('change');
      toggleOverflowMenu();
    });
  }, []);

  const hideMenu = () => {
    const menuBar = document.getElementById('menu');
    const navUL = document.getElementById('nav-ul');
    menuBar.classList.remove('change');
    navUL.classList.remove('change');
  };

  return (
    <nav>
      <NavLink to="/">
        <h2 className="logo" onClick={hideMenu}>
          RM
        </h2>
      </NavLink>

      <div className="menu-bar">
        <div id="menu">
          <div className="bar" id="bar1"></div>
          <div className="bar" id="bar2"></div>
          <div className="bar" id="bar3"></div>
        </div>
      </div>

      <ul className="nav-ul" id="nav-ul">
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={{ borderBottom: '3px solid #c7a971' }}
          >
            {t('Home.1')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            exact
            activeStyle={{ borderBottom: '3px solid #c7a971' }}
          >
            {t('About.1')}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            exact
            activeStyle={{ borderBottom: '3px solid #c7a971' }}
          >
            {t('Projects.1')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            exact
            activeStyle={{ borderBottom: '3px solid #c7a971' }}
          >
            {t('Skills.1')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            exact
            activeStyle={{ borderBottom: '3px solid #c7a971' }}
          >
            {t('Contact.1')}
          </NavLink>
        </li>
        <button className="langBtn" onClick={() => changeLang('en')}>
          EN
        </button>
        <button className="langBtn" onClick={() => changeLang('pl')}>
          PL
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
