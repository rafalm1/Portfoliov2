import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const toggleOverflowMenu = () => {
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

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
        menuBar.classList.toggle('change');
        navUL.classList.toggle('change');
      });
    });

    menuBar.addEventListener('click', () => {
      menuBar.classList.toggle('change');
      navUL.classList.toggle('change');
      toggleOverflowMenu();
    });
  }, []);

  return (
    <nav>
      <NavLink to="/">
        <h2 className="logo">RM</h2>
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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            exact
            activeStyle={{ borderBottom: '3px solid #c7a971' }}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            exact
            activeStyle={{ borderBottom: '3px solid #c7a971' }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            exact
            activeStyle={{ borderBottom: '3px solid #c7a971' }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
