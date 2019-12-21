import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Pantry from "./pages/Pantry";
import Shoplist from "./pages/Shoplist";
import Container from "./pages/Container";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Container> */}

        <Pantry />
        <Shoplist />

        {/* </Container> */}
      </>
    );
  }
}

export default App;
