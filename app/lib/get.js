const get = async (params) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params}`
  );
  return result.json();
};

export default get;
