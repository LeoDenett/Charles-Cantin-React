import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/UI/Layout';

import Home from './components/Home/index.js';
import Contact from './components/Contact/index.js';
import Galerie from './components/Galerie/index.js'
import Tarifs from './components/Tarifs/index.js'

function App() {
  return (
    <Router>
      <Layout>
          <Switch>
            <Route component={Galerie} path="/Galerie"/>
            <Route component={Tarifs} path="/Tarifs"/>
            <Route component={Contact} path="/Contact"/>
            <Route component={Home} path="/"/>
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
