import React, { useState } from "react";
import { useEffect } from "react";
import SinglePost from "../SinglePost/SinglePost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <h2>Posts:{posts.length}</h2>
      <div className="row row-cols-lg-3 row-cols-md-3 row-cols-1 g-4">
        {posts.map((post) => (
          <SinglePost post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
