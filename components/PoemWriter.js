import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      wordInput: "",
      poemValid: false
    };

    //bind
    this.updateState = this.updateState.bind(this);
    this.lineChecker = this.lineChecker.bind(this);
    this.poemChecker = this.poemChecker.bind(this);
  }

  //setState
  updateState(e){
    this.setState({
      wordInput: e.target.value // coming from user input
    }, this.poemChecker)

  }


  lineChecker(poemLine, index){
	  var wordCheck = poemLine.trim().split(" ")
    console.log(wordCheck)
    if (index === 0 || index === 2 && wordCheck.length === 5) {
      return true
    } else if (index === 1 && wordCheck.length === 3) {
      return true
    } else {
      return false
    }
    console.log(poemLines)

  }

  poemChecker(){
    var poemLines = this.state.wordInput.trim().split(/\n/)
    if (poemLines.length === 3) {
      var boolArray = poemLines.map((line, index) => this.lineChecker(line, index)) //[true, true, true] or any other permutations
      if (boolArray[0] === true && boolArray[1] === true && boolArray[2] === true) {
        // remove the error message!
        this.setState({
          poemValid: true
        })
      } else {
        this.setState({
          poemValid: false
        })
      }
    }
  }

  render() {
    if (this.state.poemValid === true) {
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.wordInput} onChange={this.updateState}/>
        </div>
      );
    } else {
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.wordInput} onChange={this.updateState}/>
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        </div>
      );
    }
  }
}
