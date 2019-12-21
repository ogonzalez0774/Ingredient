import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Pantry from "./pages/Pantry";
import Shoplist from "./pages/Shoplist";
import Container from "./pages/Container";
import Footer from "./components/footer/footer";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Container> */}
        <Header />
        <Pantry />
        <Shoplist />
        <Footer />

        {/* </Container> */}
      </>
    );
  }
}

export default App;
