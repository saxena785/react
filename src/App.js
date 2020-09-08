import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Switch,Route,Redirect } from 'react-router-dom';

const App = () => {
  return (
   <>
    <Navbar />
   <Switch>
    <Route path = "/" component = {Home} />
    <Route path = "/About" component = {About} />
    <Route path = "/Service" component = {Service} />
    <Route path = "/Contact" component = {Contact} />
     <Redirect to = "/" />
    </Switch>
 </>

  );
};

export default App;






