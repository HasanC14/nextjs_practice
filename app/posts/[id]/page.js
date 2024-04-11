import getSinglePost from "@/app/lib/getSinglePost";
export const generateMetadata = async ({ params }) => {
  const post = await getSinglePost(params.id);
  return {
    title: post.title,
  };
};
const singlePost = async ({ params }) => {
  const post = await getSinglePost(params.id);
  return (
    <div>
      blog-{post.id}, details-{post.title}
    </div>
  );
};

export default singlePost;
