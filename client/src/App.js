import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Pantry from "./pages/Pantry";
import Shoplist from "./pages/Shoplist";
import API from "./utils/API";
import Recipe from "./pages/Recipes";

class App extends React.Component {
  state = {
    email: "",
    userId: "5dfafab3a612c2884b4bd0bd",
    ingredients: []
  };

  componentDidMount() {
    this.loadPantry();
  }

  loadPantry = id => {
    API.getUser(id).then(user => {
      this.setState({ ingredients: user.data.ingredients });
    });
    this.forceUpdate();
  };

  login = (email, password) => {};
  logout() {}

  render() {
    return (
      <Router login={this.login} logout={this.logout}>
        <Header />
        <Switch>
          <Route path="/pantry">
            <Pantry
              ingredients={this.state.ingredients}
              loadPantry={this.loadPantry}
              userId={this.state.userId}
            />
            <Shoplist
              ingredients={this.state.ingredients}
              loadPantry={this.loadPantry}
              userId={this.state.userId}
            />
          </Route>
          <Route path="/">
            <Recipe />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
