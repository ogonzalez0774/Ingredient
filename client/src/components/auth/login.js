import React from "react";
class Auth extends React.Component {
  render() {
    return (
      <form action="login" method="get">
        <label for="username">
          username:
          <input className="input is-small" type="text" name="username" />
        </label>
        <br />
        <label for="password">
          password:
          <input className="input is-small" type="password" name="password" />
        </label>
        <br />
        <input className="button" type="submit" value="Submit" />
        <br />
        Don't have an account? <a href="#">Sign up here</a>
        {/* <!-- this link will change the form out to create user --> */}
      </form>
    );
  }
}
