import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { CSSTransition } from 'react-transition-group';
import { gsap, TimelineLite } from 'gsap';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/projects', name: 'Projects', Component: Projects },
];

let tl = new TimelineLite();

function App() {
  const onEnter = (node) => {
    // gsap.from(node.children[0], 2, {
    //   x: -1000,
    // });

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
  };

  const onExit = (node) => {
    // gsap.to(node.children[0], 2, {
    //   x: 1000,
    // });
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
              onExit={onExit}
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}

      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Redirect to="/" />
      </Switch> */}
    </div>
  );
}

export default App;
