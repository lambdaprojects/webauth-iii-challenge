import React from "react";
import "../../styles/App.css";
import axios from "axios";

class RegisterForm extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  handleChange = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = "http://localhost:4000/api/auth/register";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(`RESPONSE DATA IS ${res}`);
        this.props.history.push("/login");
      })
      .catch(error => {
        console.log(`ERROR IS ${error}`);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="register-card">
          <div className="register-card-items">
            <div>username:</div>
            <div>
              <input
                type="text"
                className="text-box"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="register-card-items">
            <div>password:</div>
            <div>
              <input
                type="password"
                className="text-box"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="register-card-items">
            <div>department:</div>
            <div>
              <input
                type="text"
                className="text-box"
                name="department"
                value={this.state.department}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button value="submit">Register</button>
        </div>
      </form>
    );
  }
}
export default RegisterForm;
