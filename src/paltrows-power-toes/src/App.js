import React, { Component } from "react";
//import { Route } from "react-router-dom"; //added switch component which will only render the first Route component that has a match
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import WorkoutsPage from "./WorkoutsPage";
import NotFoundPage from "./NotFoundPage";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            {/* '/' = no path
           '/about' = path to about page */}
            {/* <Route path="/" component={HomePage} /> */}
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/workouts" component={WorkoutsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
