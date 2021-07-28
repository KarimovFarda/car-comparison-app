import React from 'react';
import './App.css';
import Compare from './components/Compare'
import ProductList from './components/CarsList';
import { BrowserRouter, BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import {Home} from './export'
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
