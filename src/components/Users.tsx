import { use } from "react";

// Promise-based data fetching.
const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json(),
);

// Async function-based data fetching.
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};
// Promise created by calling the async function.
const usersAsyncPromise = getUsers();

const Users = () => {
  // const users = use(usersPromise);
  const users = use(usersAsyncPromise);

  return (
    <div>
      <h1>users: {users.length}</h1>
    </div>
  );
};

export default Users;
