import React, { Component } from "react";

export default class From extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      skill: "react",
    };
  }

  firstNameHandler(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  lastNameHandler(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  skillHandler(e) {
    this.setState({
      skill: e.target.value,
    });
  }

  submitHandler(e) {
    console.log(
      `name:${this.state.firstName} ${this.state.lastName} skill:${this.state.skill}`
    );
    e.preventDefault();
    alert(
      `name:${this.state.firstName} ${this.state.lastName} skill:${this.state.skill}`
    );
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          this.submitHandler(e);
        }}
      >
        <div>
          <label htmlFor="first-name">First-name:</label>
          <input
            type="text"
            id="first-name"
            value={this.state.firstName}
            onChange={(e) => {
              this.firstNameHandler(e);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="last-name">last-name:</label>
          <input
            type="text"
            id="last-name"
            value={this.state.lastName}
            onChange={(e) => {
              this.lastNameHandler(e);
            }}
            required
          />
        </div>

        <div>
          <select
            value={this.state.skill}
            onChange={(e) => {
              this.skillHandler(e);
            }}
            required
          >
            <option value="">select your skill</option>
            <option value="React">React</option>
            <option value="vue">vue</option>
            <option value="angular">angular</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
