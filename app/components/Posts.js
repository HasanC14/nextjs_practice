const Posts = async ({ promise }) => {
  const Posts = await promise;
  // console.log(`Showing from => ${Posts}`);
  return (
    <div>
      {Posts.map((post) => (
        <div key={post.id}>{post.id}</div>
      ))}
    </div>
  );
};

export default Posts;
