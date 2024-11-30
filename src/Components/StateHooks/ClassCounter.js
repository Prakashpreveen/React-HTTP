import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  IncrementedClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.IncrementedClick}>
          Click {this.state.count}
        </button>
      </div>
    );
  }
}
export default ClassCounter;
