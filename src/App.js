import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import pets from './pets';

const Home = lazy(() => import('./pages/Home'));
const Pet = lazy(() => import('./pages/Pet'));
const PetsList = lazy(() => import('./pages/PetsList'));
const About = lazy(() => import('./pages/About'));

const getIdFromMatch = (props, idKey) => props.match.params[idKey];

const checkIfIdExists = (props, idKey) => {
  const id = getIdFromMatch(props, idKey);
  return pets.some(item => item.id === id);
};

const App = () => {
  return (
    <div>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/pets/:petId"
            render={props =>
              checkIfIdExists(props, 'petId') ? (
                <Pet {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/pets" component={PetsList} />
          <Route path="/about" exact component={About} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
