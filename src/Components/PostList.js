import React, { Component } from "react";
import axios from "axios";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return this.setState({ posts: response.data, color: "green" });
      })
      .catch((error) => {
        return this.setState({
          errorMsg: "Failed to Retrive the Data!!!",
        });
      });
  }

  render() {
    const { posts, errorMsg, color } = this.state;
    return (
      <div>
        <h1>Lists of Data</h1>
        {posts.length
          ? posts.map((post) => <h2 key={post.id}>{post.title}</h2>)
          : null}
        <h2>{errorMsg}</h2>
      </div>
    );
  }
}

export default PostList;
