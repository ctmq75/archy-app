import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import RegistrationForm from "./RegistrationForm/RegistrationForm.js";
import LandingPage from "./LandingPage/LandingPage.js";
import CreateRoute from "./CreateRoute/CreateRoute.js";
import SavedRoutes from "./SavedRoutes/SavedRoutes.js";
import ResultPage from "./ResultPage/ResultPage.js";
import MapContainer from './MapContainer/MapContainer.js'
import SiteRef from "./SiteRef/SiteRef.js";
import  PublicOnlyRoute from "./Utils/PublicOnlyRoute";
import LoginPage from './LoginPage/LoginPage'
import PrivateRoute from "./Utils/PrivateRoute"
import HomePage from './HomePage/HomePage.js'
import RegistrationPage from './RegistrationPage/RegistrationPage.js'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PrivateRoute path="/CreateRoute" component={CreateRoute} />
      <PrivateRoute path="/Homepage" component={HomePage} />

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/SiteRef" component={SiteRef} />
      <PrivateRoute
              path={'/savedroutes'}
              component={SavedRoutes}
            />
      <Route exact path="/resultpage" component={ResultPage} />
      <Route exact path="/LoginPage" component={LoginPage} />
      <Route exact path="/RegistrationPage" component={RegistrationPage} />

      <Route exact path="/maps" component={MapContainer} />
      <PublicOnlyRoute path={"/register"} component={RegistrationForm} />
      </BrowserRouter>
    </div>
  );
}

export default App;
