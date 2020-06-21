import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './fragments/Header';
const Home = React.lazy(() => import ('./screens/Home'));
const Planets = React.lazy(() => import ('./screens/Planets'));
const Asteroids = React.lazy(() => import ('./screens/Asteroids'));

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<div style={{color: '#fff'}}>Loading...</div>}>
            <Switch>
              <Route path="/planets">
                <Planets />
              </Route>
              <Route path="/asteroids">
                <Asteroids />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
