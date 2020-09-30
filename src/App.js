import React from 'react';
import './App.scss';

//React router dom
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

//Pages
import MainPage from './pages/index/index'
import PageNotFound from './pages/404/404'
import CapybaraFaker from './pages/capybara_pages/capybarafaker'
import CapybaraMultipleElements from './pages/capybara_pages/capybaramultipleelements';
import CapybaraHelloWorld from './pages/capybara_pages/helloworld'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={PageNotFound}/>
        <Route exact path="/capybarafaker" component={CapybaraFaker}/>
        <Route exact path="/capybaramultpleelements" component={CapybaraMultipleElements} />
        <Route exact path="/capybarahelloworld" component={CapybaraHelloWorld} />
        <Redirect to="/404/" />
      </Switch>
    </Router>
  );
}

export default App;
