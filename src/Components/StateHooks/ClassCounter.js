import React, { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  IncrementedClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h2 style={{ color: "red" }}>NORMAL CLASS COUNTER</h2>
        <button onClick={this.IncrementedClick}>
          Click {this.state.count}
        </button>
      </div>
    );
  }
}
export default ClassCounter;
