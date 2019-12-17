import React from "react";

class pantryItem extends React.Component {
    render() {
        return (
            <p>{this.props.name}</p>
        )
    }
}

export default pantryItem;