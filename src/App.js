import React, { lazy, Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';

const Home = lazy(() => import('./pages/Home'));
const Pet = lazy(() => import('./pages/Pet'));
const PetsList = lazy(() => import('./pages/PetsList'));
const About = lazy(() => import('./pages/About'));

const App = () => {
  return (
    <div>
      <HashRouter basename="/">
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pets/:petId" component={Pet} />
            <Route path="/pets" component={PetsList} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
};

export default App;
