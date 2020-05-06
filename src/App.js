import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Nav/Nav"
import About from "./pages/About"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
