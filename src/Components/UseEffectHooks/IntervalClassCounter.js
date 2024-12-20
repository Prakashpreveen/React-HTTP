import React, { Component } from "react";

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { count } = this.state;
    return <div>{count}</div>;
  }
}

export default IntervalClassCounter;
