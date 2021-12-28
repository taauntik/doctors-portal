import React from "react";

import "../../../styles/Home/Blogs/Blogs.css";

function BlogCard({ blog }) {
  const { name, title, description, avatar } = blog;
  return (
    <div className="col-md-4 my-5">
      <div className="blog-card border shadow-sm rounded p-3">
        <div className="user">
          <img className="user-img" src={avatar} alt="" />
          <div className="user-info">
            <h5 className="">{name}</h5>
            <p>24 April, 2021</p>
          </div>
        </div>
        <div className="title h6">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
