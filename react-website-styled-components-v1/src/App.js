import React from "react";
import GlobalStyle from "./GlobalStyles"
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
    </Router>
  );
}

export default App;
