import React, { Component } from "react";
import './App.css';
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LayoutPage from "./pages/LayoutPage"


class App extends Component {

  render() {
    return (
      <div className="App">

        <NavBar />
        <LayoutPage />

        {/* <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/cosmetics" component={Cosmetics} />
        <Route path="/discount" component={Discount} />
        <Route path="/contacts" component={Contacts} /> */}

      </div>
    );
  }
}

export default App;
