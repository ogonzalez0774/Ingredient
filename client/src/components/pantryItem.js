import React from "react";

class pantryItem extends React.Component {
    render() {
        return (
            <button className="button is-success is-light is-outlined is-inverted">
                {this.props.name}
            </button>
        );
    }
}

export default pantryItem;
