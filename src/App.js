import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import LandingPage from './LandingPage/LandingPage.js'
import CreateRoute from './CreateRoute/CreateRoute.js'
import SavedRoutes from './SavedRoutes/SavedRoutes.js'
import ResultPage from './ResultPage/ResultPage.js'
import SiteRef from './SiteRef/SiteRef.js'

function App() {
  return (
    <div className="App">
      <Route 
      exact path='/CreateRoute'
      component={CreateRoute}
      />
            <Route 
      exact path='/'
      component={LandingPage}
      />
            <Route 
      exact path='/SiteRef'
      component={SiteRef}
      />
            <Route 
      exact path='/savedroutes'
      component={SavedRoutes}
      />
            <Route 
      exact path='/resultpage'
      component={ResultPage}
      />

    </div>
  );
}

export default App;