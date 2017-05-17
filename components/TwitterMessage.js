import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <p>Remaining characters left: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}
