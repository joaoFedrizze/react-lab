import React from 'react';
import './App.scss';

//React router dom
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//Pages
import MainPage from './pages/home/index';
import PageNotFound from './pages/404';
import CapybaraTests from './pages/CapybaraTests';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={PageNotFound} />
        <Route exact path="/capybaratests" component={CapybaraTests} />
        <Redirect to="/404/" />
      </Switch>
    </Router>
  );
}

export default App;
