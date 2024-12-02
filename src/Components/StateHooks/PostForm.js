import React, { Component } from "react";
import axios from "axios";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      title: "",
      body: "",
    };
  }
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  SubmitChanger = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  render() {
    const { userid, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.SubmitChanger}>
          <div>
            <label>Userid</label>
            <input
              type="text"
              name="userid"
              value={userid}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Body</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
