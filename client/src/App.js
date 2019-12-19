import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pantry from "./pages/pantry";

class App extends React.Component {
    render() {
        return <Pantry />;
    }
}
