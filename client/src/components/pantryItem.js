import React from "react";

class PantryItem extends React.Component {
    render() {
        return (
            <button
                className="button is-success is-light is-outlined is-inverted"
                onClick={this.props.onClick}
            >
                {this.props.name}, {this.props.amount}
            </button>
        );
    }
}

export default PantryItem;
