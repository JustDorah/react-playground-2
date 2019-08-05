import React, { Component } from "react";
import ValidationError from "./validationError";
/*
In this section we reviewed the use of forms in React and compared uncontrolled components to controlled components. We saw that a controlled component has its state managed within React. Since managing state is a difficult problem, having a single source of truth, that is the React state, is a benefit of this approach.

Uncontrolled components are fine for simple, quick solutions without too much interactivity. Controlled components are better when the interaction becomes more complex.*/

export default class RegistrationFrom extends Component {
  /* 1. REFRACTOR to use controlled components start by set up state to store the form values
    constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }*/

  constructor(props) {
    super(props);
    //set up state to store the form values
    this.state = {
      name: {
        value: "",
        //7. adding booleans
        touched: false
      },
      password: {
        value: "",
        touched: false
      },
      repeatPassword: {
        value: "",
        touched: false
      }
    };
  }
  /** 2. Then create handlers to update these state properties. */
  updateName(name) {
    /* //8. update your state setting methods to switch the touched boolean from false to true when the user updates the field. then go to #9
                       this.setState({
                         name: {
                           value: name,
                           touched: true
                         }
                       });*/
    this.setState({ name: { value: name, touched: true } });
  }
  //5. This method will return a string if the field doesn't meet our validation criteria, or undefined otherwise.
  //In this method we start by getting the existing values from the state. Then we consider each validation rule and return an appropriate message for each rule.
  validateName(fieldValue) {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }

  updatePassword(password) {
    this.setState({
      password: { value: password, touched: true }
    });
  }
  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!password.match(/[0-9]/)) {
      return "Password must contain at least one number";
    }
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({
      password: { value: repeatPassword, touched: true }
    });
  }
  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return "Passwords do not match";
    }
  }

  /*4.// Refactor the handleSubmit() method to grab the values from the state instead.
  handleSubmit(event) {
    event.preventDefault();
    //const name = event.target.name.value;
    const name = this.nameInput.current.value;
    const password = event.target.password.value;
    console.log("Name: ", name);
    console.log("Password: ", password);
  }*/
  handleSubmit(event) {
    event.preventDefault();
    const { name, password, repeatPassword } = this.state;

    console.log("Name: ", name.value);
    console.log("Password: ", password.value);
    console.log("Repeat Password: ", repeatPassword.value);

    //potentially submit these values to the server here
  }

  render() {
    const nameError = this.validateName();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          {/* <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            ref={this.nameInput}
            //value="Frank" // won't allow you to type aka no user typing interface
            defaultValue="Frank"
          /> */}
          {/* 3. ADD the event listeners to the inputs*/}
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            onChange={e => this.updateName(e.target.value)}
          />

          {/* 6. after creating valErr component
          BUT then...
           validation messages show up even before the user has typed anything into the fields. Ideally, we only want these messages to display when the user has tried to enter some information. To correct this, we can add booleans to the state which show whether the user has typed anything into each field.
           */}
          {/* #9 
          Now you can conditionally render the ValidationError component depending on whether the field has been changed by the user.
          <ValidationError message={this.validateName()} /> */}
          {this.state.name.touched && <ValidationError message={nameError} />}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          {/* <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
          /> */}
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
            onChange={e => this.updatePassword(e.target.value)}
          />

          {/* <ValidationError message={this.validatePassword()} /> */}
          {this.state.name.touched && (
            <ValidationError message={passwordError} />
          )}

          <div className="registration__hint">
            6 to 72 characters, must include a number
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          {/* <input
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
          /> */}

          <input
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
            onChange={e => this.updateRepeatPassword(e.target.value)}
          />

          {/* <ValidationError message={this.validateRepeatPassword()} /> */}
          {this.state.name.touched && (
            <ValidationError message={repeatPasswordError} />
          )}
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          {/* 10.
          Finally, we can use our validation methods in the render() method to either enable or disable the Save button.
          
          <button type="submit" className="registration__button">
            Save
          </button> */}
          <button
            type="submit"
            className="registration__button"
            disabled={
              this.validateName() ||
              this.validatePassword() ||
              this.validateRepeatPassword()
            }
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}
