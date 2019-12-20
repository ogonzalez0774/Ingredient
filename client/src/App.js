import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pantry from "./components/pages/Pantry";
import TestRecipe from "./components/pages/TestRecipe";

class App extends React.Component {
    render() {
        //return <Pantry />;
        return <TestRecipe />;
    }
}

export default App;
