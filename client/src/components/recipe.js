import React from "react";

class Result extends React.Component {
    render() {
        return (
            <div class="tile is-parent">
                <article class="tile is-child notification is-bold is-success">
                    <p class="title">{this.props.name}</p>
                    <p class="subtitle">
                        Ingredients:{" "}
                        <ul>
                            {this.props.ingredients.map(ingredient => {
                                return <li>{ingredient}</li>;
                            })}
                        </ul>
                    </p>
                </article>
            </div>
        );
    }
}

export default Result;
