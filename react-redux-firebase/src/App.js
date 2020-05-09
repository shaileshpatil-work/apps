import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import Notfound from './components/NotFound';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>        
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="/create" component={CreateProject}/>
          <Route component={Notfound} />
        </Switch>        
      </div>          
    </BrowserRouter>
  );
}

export default App;