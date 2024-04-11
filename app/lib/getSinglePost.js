export default async function getSinglePost(params) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params}`
  );
  return result.json();
}
