import React from "react";
const units = require("../units.json");

class PantryItem extends React.Component {
    render() {
        if (this.props.quantity > 0) {
            return (
                <button
                    className="button is-success is-light is-outlined is-inverted"
                    onDoubleClick={this.props.onDoubleClick}
                >
                    {this.props.name}, {this.props.quantity}{" "}
                    {units[this.props.name].unit}
                    {this.props.quantity > 1 && units[this.props.name].unit
                        ? "s"
                        : ""}
                </button>
            );
        } else return null;
    }
}

export default PantryItem;
