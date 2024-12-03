import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData1() {
  const [post, Setpost] = useState([]);
  const [id, Setid] = useState(1);
  const [buttonid, Setbuttonid] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
      .then((res) => Setpost(res.data))
      .catch((err) => console.log(err));
  }, [buttonid]);

  const ClickHandler = () => {
    Setbuttonid(id);
    Setid("");
  };
  const EventFunction = (e) => {
    if (e.key === "Enter") {
      ClickHandler();
    }
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>FETCHING DATA</h1>
      <input
        placeholder="UserID"
        type="text"
        value={id}
        onChange={(e) => Setid(e.target.value)}
        onKeyDown={EventFunction}
      />
      <button onClick={ClickHandler}>Fetch</button>
      {post && (
        <h3 key={post.id}>
          ({post.id}) {post.title}
        </h3>
      )}
    </div>
  );
}

export default FetchData1;
