import Link from "next/link";
import React from "react";

const blogs = () => {
  const blogs = [
    {
      id: 1,
      details: "blog-01",
    },
    {
      id: 2,
      details: "blog-02",
    },
  ];

  return (
    <ul className="">
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>{blog.details}</Link>
        </li>
      ))}
    </ul>
  );
};

export default blogs;
