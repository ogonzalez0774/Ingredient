import React from "react";

const initialState = {
  email: "",
  password: "",
  error: null
};
class Login extends React.Component {
  state = { ...initialState };

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.openLogin();
    this.props.firebase
      .loginUser(email, password)
      .then(authUser => {
        console.log(authUser);
        this.setState({ ...initialState });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 110
        }}
        className="tile is-parent is-5 box has-background-white-bis"
      >
        <div className="tile is-child notification">
          <form action="" onSubmit={this.onSubmit}>
            <label htmlFor="email">
              email:
              <input
                className="input is-small"
                value={email}
                onChange={this.onChange}
                type="text"
                name="email"
              />
            </label>
            <br />
            <label htmlFor="password">
              password:
              <input
                className="input is-small"
                value={password}
                onChange={this.onChange}
                type="password"
                name="password"
              />
            </label>

            <input className="button" type="submit" value="Submit" />

            {error && <p>{error.message}</p>}
          </form>
          Don't have an account?{" "}
          <a onClick={this.props.openSignup} href="#">
            Sign up here
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
