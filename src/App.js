import React from 'react';
import './App.css';

//React router dom
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

//Pages
import MainPage from './pages/index/index'
import PageNotFound from './pages/404/404'
import ExamplePage from './pages/example'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={PageNotFound}/>
        <Route exact path="/example" component={ExamplePage}/>
        <Redirect to="/404/" />
      </Switch>
    </Router>
  );
}

export default App;
