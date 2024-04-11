const getAll = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  return result.json();
};

export default getAll;
