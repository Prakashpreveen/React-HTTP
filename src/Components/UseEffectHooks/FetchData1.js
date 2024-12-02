import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData1() {
  const [post, setpost] = useState(null);
  const [id, setid] = useState(1);
  const [buttonid, setbuttonid] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
      .then((res) => setpost(res.data))
      .catch((err) => console.log(err));
  }, [buttonid]);

  const eventHandler = (e) => {
    if (e.key === "Enter") {
      DataRetrived();
    }
  };

  const DataRetrived = () => {
    setbuttonid(id);
    setid("");
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>FETCHING THE DATA</h1>
      <input
        placeholder="UserID"
        value={id}
        onChange={(e) => setid(e.target.value)}
        onKeyDown={eventHandler}
      />
      <button onClick={DataRetrived}>Fetch Data</button>
      {post ? <h2>{post.title}</h2> : null}
    </div>
  );
}
export default FetchData1;
