import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    // <input id="test-username" type="text" value={this.state.username} onChange={this.usernameInput.bind(this)} />
    // You can also at .bind(this) in render()

    this.usernameInput = this.usernameInput.bind(this)
    this.passwordInput = this.passwordInput.bind(this)
    this.formSubmission = this.formSubmission.bind(this)
  }

  //setState
  usernameInput(e){
    this.setState({
      username: e.target.value  //.val()
    })
  }

  passwordInput(e){
    this.setState({
      password: e.target.value
    })
  }

  formSubmission(e){
    e.preventDefault();
    // event.target.children()
    if (this.state.username !== "" && this.state.password !== ""){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.formSubmission}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.usernameInput} />

          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passwordInput} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
