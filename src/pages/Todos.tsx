import { Link, useLoaderData } from "react-router";
const Todos = () => {
  const todos = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Todos ({todos.length})
      </h1>
      <ol className="list-decimal ms-6">
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`} className="hover:underline">
              {todo.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todos;
