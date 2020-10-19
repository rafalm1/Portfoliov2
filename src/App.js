import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

import { Redirect, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { CSSTransition } from 'react-transition-group';
import { gsap, TimelineLite } from 'gsap';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/projects', name: 'Projects', Component: Projects },
  { path: '/skills', name: 'Skills', Component: Skills },
];

const tl = new TimelineLite();

function App() {
  gsap.registerPlugin(TimelineLite);

  const onEnter = (node) => {
    window.scrollTo(0, 0);
    if (
      node.children[0].className === 'Skills' ||
      node.children[0].className === 'Projects'
    ) {
      tl.to(node.children[0].firstElementChild, 0.5, { opacity: '0' })
        .fromTo(
          node.children[0],
          0.5,
          { left: '-100%', top: '50%' },
          { left: '0%' }
        )
        .fromTo(
          node.children[0],
          0.5,
          { height: '2vh' },
          { height: 'auto', top: '0%' }
        )
        .to(node.children[0].firstElementChild, 0.5, { opacity: '1' });
    } else {
      tl.to(node.children[0].firstElementChild, 0.5, { opacity: '0' })
        .fromTo(
          node.children[0],
          0.5,
          { left: '-100%', top: '50%' },
          { left: '0%' }
        )
        .fromTo(
          node.children[0],
          0.5,
          { height: '2vh' },
          { height: '100vh', top: '0%' }
        )
        .to(node.children[0].firstElementChild, 0.5, { opacity: '1' });
    }
  };

  return (
    <div className="App">
      <Navbar />

      {routes.map(({ name, path, Component }) => (
        <Route key={name} path={path} exact>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1200}
              classNames="page"
              unmountOnExit
              onEnter={onEnter}
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
      <Redirect to="/" />
    </div>
  );
}

export default App;
