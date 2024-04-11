import getAllPosts from "../lib/getAllPost";
import Link from "next/link";

const getAllPost = async () => {
  const posts = await getAllPosts();

  return (
    <ul className="">
      {posts.map((blog) => (
        <li key={blog.id}>
          <Link href={`/posts/${blog.id}`}>{blog.id}</Link>
        </li>
      ))}
    </ul>
  );
};

export default getAllPost;
