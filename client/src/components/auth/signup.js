import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};
class SignUpForm extends Component {
  state = { ...initialState };

  onSubmit = event => {
    event.preventDefault();
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .signUpUser(username, email, passwordOne)
      .then(authUser => {
        API.createUser(email, { email: email, username: username });
        this.setState({ ...initialState });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  onChange = event => {
    console.log(event.target.value);
    if (
      event.target.name === "passwordTwo" &&
      event.target.value !== this.state.passwordOne
    ) {
      event.target.setCustomValidity("Passwords must match");
    } else {
      event.target.setCustomValidity("");
    }

    this.setState(
      { [event.target.name]: event.target.value },

      () => {
        // console.log(event.target.checkValidity());
        // console.log(event.target.value);
        console.log(this.state.passwordOne);
      }
    );
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    return (
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 110
        }}
        className="tile is-parent is-5"
      >
        <div className="tile is-child notification">
          <form action="" onSubmit={this.onSubmit}>
            <label htmlFor="username">
              username:
              <input
                className="input is-small"
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                required
              />
            </label>
            <label htmlFor="email">
              email:
              <input
                className="input is-small"
                name="email"
                value={email}
                onChange={this.onChange}
                type="email"
                required
              />
            </label>
            <label htmlFor="passwordOne">
              password:
              <input
                className="input is-small"
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                minLength="6"
                required
              />
            </label>
            <label htmlFor="passwordTwo">
              confirm password:
              <input
                className="input is-small"
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                // pattern={passwordOne}
                required
              />
            </label>

            <input className="button" type="submit" value="Submit" />

            {error && <p>{error.message}</p>}
          </form>
          Already have an account? <a href="#">Log in here</a>
        </div>
      </div>
    );
  }
}
// const SignUpLink = () => (
//   <p>
// {
/* Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link> */
// }
//   </p>
// );

export default SignUpForm;
// export default SignUpPage;
// export { SignUpForm, SignUpLink };
