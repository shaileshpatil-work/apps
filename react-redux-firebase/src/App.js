import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import Notfound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>        
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route component={Notfound} />
        </Switch>        
      </div>          
    </BrowserRouter>
  );
}

export default App;