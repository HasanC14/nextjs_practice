import getAllPosts from "../lib/getAllPost";
import Link from "next/link";

export const metadata = {
  title: "Post Section",
  description: "Generated by create next app",
};

const getAllPost = async () => {
  const posts = await getAllPosts();
  return (
    <ul className="space-y-10 my-10">
      {posts.map((post) => (
        <li key={post.id} className="bg-red-600 p-4 hover:bg-red-400 max-w-3xl">
          <Link href={`/posts/${post.id}`}>{post.body}</Link>
        </li>
      ))}
    </ul>
  );
};

export default getAllPost;
