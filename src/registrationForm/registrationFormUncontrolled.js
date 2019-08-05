import React, { Component } from "react";

export default class RegistrationFrom extends Component {
  //4.2.0 using ref first create React.creatRef() method then attach to input element using ref attribute
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  //2. add a method to process the form values when the submit button is clicked.

  //4. accessing values 2.ways.. event object or using ref
  /*handleSubmit(event) {
    event.preventDefault();
    //process form values here
  }*/
  /*4.1  using the event object
//To use the event object, you can first access the <form> element, which will be stored in e.target. Then you can access the individual inputs by name or id through the form itself. Update your handleSubmit method to see the value entered in the name and password inputs.

  handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    console.log("Name: ", name);
    console.log("Password: ", password);
  }*/
  //4.2.3 update handleSubmit() method
  handleSubmit(event) {
    event.preventDefault();
    const name = this.nameInput.current.value;
    console.log("Name: ", name);
  }
  render() {
    return (
      //And add the event listener on the form to invoke this method on form submit.
      //1. Render a simple form with the three inputs.

      //3. add the event listener on the form to invoke this method on form submit.
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
                         /> */}
          {/* 4.2.1 : only one input changed..
           */}
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
            ref={this.nameInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
          />
          <div className="registration__hint">
            6 to 72 characters, must include a number
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
          />
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Save
          </button>
        </div>
      </form>
    );
  }
}
