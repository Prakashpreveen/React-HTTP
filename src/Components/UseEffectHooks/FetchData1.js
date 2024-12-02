import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData1() {
  // Assigning hooks
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  // Function to handle fetching data
  const dataHandler = () => {
    setIdFromButtonClick(id);
  };

  // Fetching data using Axios
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, [idFromButtonClick]);

  // Returning values
  return (
    <>
      <h1 style={{ color: "red", background: "yellow" }}>FETCHING DATA</h1>
      <input
        type="text"
        placeholder="Enter UserID"
        value={id}
        onChange={(e) => setId(e.target.value)} // Update id on input change
      />
      <button onClick={dataHandler}>Fetch Data</button>
      {post ? ( // Conditional rendering based on post state
        <h3 style={{ color: "green" }}>{post.title}</h3>
      ) : (
        <h3 style={{ color: "green" }}>No post found or enter a valid ID</h3>
      )}
    </>
  );
}

export default FetchData1;
