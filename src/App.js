import React from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import "./App.css";
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import BookContextProvider from "./BookContext";
import Collection from "./Collection";

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Router>

          <Navbar />
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Collection">
              <Collection />
            </Route>

          </Switch>
        </Router>
      </BookContextProvider>
    </div>
  );
}
