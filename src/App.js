import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Video from "./Video/Video";

console.log(process.env.REACT_APP_API_KEY)
export class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path={"/video/:id"} component={Video}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
