import { use } from "react";

// Promise-based data fetching.
const postsPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json(),
);

// Async function-based data fetching.
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};
// Promise created by calling the async function.
const postsAsyncPromise = getPosts();

const Posts = () => {
  // const posts = use(postsPromise);
  const posts = use(postsAsyncPromise);

  return (
    <div>
      <h1 className="text-center">Posts ({posts.length})</h1>
    </div>
  );
};

export default Posts;
