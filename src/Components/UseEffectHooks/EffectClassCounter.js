import React, { Component } from "react";

class EffectClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} Times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Component Did Updated");

      document.title = `Clicked ${this.state.count} Times`;
    }
  }

  render() {
    const { count, name } = this.state;
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: count + 1 })}>
          Clicked {count} Times
        </button>
      </div>
    );
  }
}

export default EffectClassCounter;
