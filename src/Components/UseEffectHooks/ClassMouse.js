import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      color: "green",
    };
  }
  mousemovement = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.mousemovement);
  }

  render() {
    const { x, y, color } = this.state;
    return (
      <div>
        <h1 style={{ color: "red" }}>CLASS MOUSE EFFECT</h1>
        <h2 style={{ color: "red" }}>
          X : <span style={{ color }}>{x}</span> Y :{" "}
          <span style={{ color }}>{y}</span>
        </h2>
      </div>
    );
  }
}

export default ClassMouse;
