import React from "react";

// internal imports
import drCaudi from "../../../images/Winson-herry.png";
import drhend from "../../../images/msHend.png";
import drGrande from "../../../images/ariana-grande.png";
import BlogCard from "./BlogCard";
import "../../../styles/Home/Blogs/Blogs.css";

const blogsData = [
  {
    id: 1,
    name: "Dr. Caudi",
    title: "2 times of brush in a day can keep you healthy",
    description:
      "It's a long established fact that by the readable content of a lot layout. The point",
    avatar: drCaudi,
  },
  {
    id: 2,
    name: "Dr. Hend",
    title: "2 times of brush in a day can keep you healthy",
    description:
      "It's a long established fact that by the readable content of a lot layout. The point",
    avatar: drhend,
  },
  {
    id: 3,
    name: "Dr. Grande",
    title: "2 times of brush in a day can keep you healthy",
    description:
      "It's a long established fact that by the readable content of a lot layout. The point",
    avatar: drGrande,
  },
];

function Blogs() {
  return (
    <section className="container blogs my-5">
      <div className="text-center">
        <h5 className="primary-text">OUR BLOG</h5>
        <h1 className="text-brand">From Our Own Blog</h1>
      </div>
      <div>
        <div className="row">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
