import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPostDetails(data));
  });

  return (
    <div className="container mt-5">
      <div className="card bg-success bg-gradient text-white">
        <div className="card-body">
          <h3 className="text-center">{postDetails.title}</h3>
          <br />
          <p>{postDetails.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
