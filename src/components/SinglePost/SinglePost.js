import React from "react";
import { Link } from "react-router-dom";
const SinglePost = (props) => {
  const { id, userId, title } = props.post;
  //   console.log(userId, title, body);
  return (
    <div className="col">
      <div className="card-group">
        <div className="card bg-success bg-gradient text-white">
          <div className="card-body">
            <h3>{title}</h3>

            <p>Author Id: {userId}</p>
            <Link to={`posts/${id}`} className="btn btn-danger ms-5">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
