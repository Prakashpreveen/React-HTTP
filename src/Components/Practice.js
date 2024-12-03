import React, { useState, useEffect } from "react";
import axios from "axios";

function Practice() {
  const [post, Setpost] = useState([]);
  const [id, Setid] = useState(1);
  const [buttonfetch, Setbuttonfetch] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonfetch}`)
      .then((res) => Setpost(res.data))
      .catch((err) => console.log(err));
  }, [buttonfetch]);

  const ClickHandler = () => {
    Setbuttonfetch(id);
    Setid("");
  };

  const EventHandler = (e) => {
    if (e.key === "Enter") {
      ClickHandler();
    }
  };

  return (
    <>
      <h1 style={{ color: "red" }}>FETCHING DATA</h1>
      <input
        placeholder="UserID"
        type="text"
        value={id}
        onChange={(e) => Setid(e.target.value)}
        onKeyDown={EventHandler}
      />
      <button onClick={ClickHandler}>Fetch</button>
      {post && (
        <h3 key={post.id}>
          ({post.id}) - {post.title}
        </h3>
      )}
    </>
  );
}

export default Practice;
