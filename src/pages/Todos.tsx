import { useLoaderData } from "react-router";
const Todos = () => {
  const todos = useLoaderData();
  console.log("Todos:", todos);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Todos ({todos.length})
      </h1>
      <ol className="list-decimal ms-6">
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Todos;
