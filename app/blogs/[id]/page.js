import React from "react";

const singleBlog = ({ params }) => {
  const { id, details } = params;
  return (
    <div>
      blog-{id}, details-{details}
    </div>
  );
};

export default singleBlog;
